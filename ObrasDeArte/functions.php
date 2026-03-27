<?

/* Config */
require __DIR__ . '/config.php';

/* Configuracion basica */
function getheader()
{
    include __DIR__ . '/inc/header.php';
}

function getfooter()
{
    include __DIR__ . '/inc/footer.php';
}

function site_path($path = '')
{
    $script_dir = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME']));
    $base = str_ends_with($script_dir, '/crud') ? substr($script_dir, 0, -5) : $script_dir;

    if ($base === '/' || $base === '.') {
        $base = '';
    }

    return $base . '/' . ltrim($path, '/');
}

/* BASE DE DATOS */

function conn()
{
    $conn = new mysqli(SERV, USER, PASS, DBNM);

    if ($conn->connect_error) {
        die("Error de conexion: " . $conn->connect_error);
    }

    $conn->set_charset("utf8mb4");

    return $conn;
}

function consulta($sql)
{
    $conn = conn();
    $result = $conn->query($sql);

    if (!$result) {
        die("Error en la consulta: " . $conn->error);
    }

    if ($result === true) {
        $conn->close();
        return true;
    }

    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    $conn->close();

    return $data;
}

/* Modo Debug */

function debug_print_r($cosa, $texto = '')
{
    if (DEBUG) {
        echo '<div class="debug">';

        if (!empty($texto)) {
            echo '<span>' . $texto . '</span>';
        }

        echo '<pre><code>';

        if (is_array($cosa) || is_object($cosa)) {
            print_r($cosa);
        } else {
            echo $cosa;
        }

        echo '</code></pre></div>';
    }
}

function render_relation_builder_script($builders)
{
    $builders_json = json_encode($builders);
    echo <<<HTML
<script>
function setupRelationBuilder(builder, templateId, initialValues) {
  if (!builder) return;

  const lista = builder.querySelector('[data-relaciones-lista]');
  const addBtn = builder.querySelector('[data-add-relacion]');
  const template = document.getElementById(templateId);

  function selectedValues(excludeSelect = null) {
    return Array.from(lista.querySelectorAll('[data-relacion-select]'))
      .filter(select => select !== excludeSelect)
      .map(select => select.value)
      .filter(Boolean);
  }

  function refreshOptions() {
    const selects = Array.from(lista.querySelectorAll('[data-relacion-select]'));

    selects.forEach(select => {
      const taken = selectedValues(select);
      Array.from(select.options).forEach(option => {
        option.hidden = taken.includes(option.value);
      });

      if (select.selectedOptions[0] && select.selectedOptions[0].hidden) {
        const firstVisible = Array.from(select.options).find(option => !option.hidden);
        if (firstVisible) select.value = firstVisible.value;
      }
    });

    const remaining = Array.from(template.content.querySelector('[data-relacion-select]').options)
      .some(option => !selectedValues().includes(option.value));
    addBtn.disabled = !remaining;
  }

  function bindItem(item) {
    const select = item.querySelector('[data-relacion-select]');
    const removeBtn = item.querySelector('[data-remove-relacion]');

    select.addEventListener('change', refreshOptions);
    removeBtn.addEventListener('click', () => {
      item.remove();
      if (!lista.children.length) addSelect();
      refreshOptions();
    });
  }

  function addSelect(value = '') {
    const item = template.content.firstElementChild.cloneNode(true);
    const select = item.querySelector('[data-relacion-select]');

    if (value) {
      select.value = String(value);
    } else {
      const taken = selectedValues();
      const firstAvailable = Array.from(select.options).find(option => !taken.includes(option.value));
      if (firstAvailable) select.value = firstAvailable.value;
    }

    lista.appendChild(item);
    bindItem(item);
    refreshOptions();
  }

  addBtn.addEventListener('click', () => addSelect());

  if (initialValues.length) {
    initialValues.forEach(value => addSelect(value));
  } else {
    addSelect();
  }
}

const relationBuilders = $builders_json;
relationBuilders.forEach((config, index) => {
  setupRelationBuilder(document.querySelectorAll('[data-relaciones-builder]')[index], config.templateId, config.initialValues);
});
</script>
HTML;
}

function render_filter_obras_script()
{
    echo <<<HTML
<script>
function filterObras() {
    const input = document.getElementById('filtro-obras');
    const lista = document.getElementById('lista-obras');
    if (!input || !lista) return;

    const filter = input.value.toUpperCase();
    const items = lista.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const texto = items[i].textContent || items[i].innerText;
        items[i].style.display = texto.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
}
</script>
HTML;
}

function render_filter_tabla_script()
{
    echo <<<HTML
<script>
function filterCrudTable() {
    const input = document.getElementById('filtro-crud');
    const tabla = document.querySelector('.tabla-crud tbody');
    if (!input || !tabla) return;

    const filter = input.value.toUpperCase();
    const filas = tabla.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        const texto = filas[i].textContent || filas[i].innerText;
        filas[i].style.display = texto.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
    }
}
</script>
HTML;
}

function upload_image_file($file, $target_dir, $web_prefix)
{
    if (
        !isset($file) ||
        !isset($file['error']) ||
        $file['error'] === UPLOAD_ERR_NO_FILE
    ) {
        return ['ok' => true, 'path' => ''];
    }

    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['ok' => false, 'message' => 'No se pudo subir la imagen.'];
    }

    $allowed_exts = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed_exts, true)) {
        return ['ok' => false, 'message' => 'La imagen debe ser jpg, jpeg, png, gif o webp.'];
    }

    if (!is_dir($target_dir) && !mkdir($target_dir, 0777, true) && !is_dir($target_dir)) {
        return ['ok' => false, 'message' => 'No se pudo preparar la carpeta de subida.'];
    }

    $safe_name = preg_replace('/[^a-zA-Z0-9_-]/', '-', pathinfo($file['name'], PATHINFO_FILENAME));
    $safe_name = trim($safe_name, '-');
    if ($safe_name === '') {
        $safe_name = 'imagen';
    }

    $filename = $safe_name . '-' . uniqid() . '.' . $ext;
    $target_path = rtrim($target_dir, '/\\') . DIRECTORY_SEPARATOR . $filename;

    if (!move_uploaded_file($file['tmp_name'], $target_path)) {
        return ['ok' => false, 'message' => 'No se pudo guardar la imagen subida.'];
    }

    return ['ok' => true, 'path' => rtrim($web_prefix, '/') . '/' . $filename];
}
