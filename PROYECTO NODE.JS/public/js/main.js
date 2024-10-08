//--========================================================== -->
//--Scrip para el index-->
//--========================================================== -->

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Medellin la ciudad de la eterna primavera')
  .pauseFor(200)
  .deleteChars(10)
  .start();

//--========================================================== -->
//--Scrip para pasar entre modales login y logout-->
//--========================================================== -->

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('link-to-register').addEventListener('click', function(event) {
        event.preventDefault();
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('login'));
        loginModal.hide();
        var registerModal = new bootstrap.Modal(document.getElementById('register'));
        registerModal.show();
    });

    document.getElementById('link-to-login').addEventListener('click', function(event) {
        event.preventDefault();
        var registerModal = bootstrap.Modal.getInstance(document.getElementById('register'));
        registerModal.hide();
        var loginModal = new bootstrap.Modal(document.getElementById('login'));
        loginModal.show();
    });
});

//--========================================================== -->
//--Scrip para modificar las columnas-->
//--========================================================== -->

let dataTable;
let dataTableIsInitialized = false;
let dataTableOptions = {
  
    dom: "Bfrtilp",
    buttons: [
      {
          extend: 'copy',
          text: '<i class="fa fa-copy"></i> Copy', 
          className: 'btn btn-primary'
      },
      {
          extend: 'csv',
          text: '<i class="fa fa-file-csv"></i> CSV', 
          className: 'btn btn-success'
      },
      {
          extend: 'excel',
          text: '<i class="fa fa-file-excel"></i> Excel', 
          className: 'btn btn-warning'
      },
      {
          extend: 'pdf',
          text: '<i class="fa fa-file-pdf"></i> PDF', 
          className: 'btn btn-danger'
      },
      {
          extend: 'print',
          text: '<i class="fa fa-print"></i> Print', 
          className: 'btn btn-info'
      }
  ],
    lengthMenu: [3,6,9,12],
    columnDefs: [
        { orderable: false, targets: [-1, -2] },//para habilitar y deshabilitar ordenamiento en coloumnas
        { searchable: true, targets: '_all' }, // Deshabilitar búsqueda en todas las columnas
        { width: '8%', targets: '_all' }  // Aplicar un ancho del 5% a todas las columnas
    ],
    //Para que muestre los 5 primeros registros
    pageLength: 5,
    language : {
      "autoFill": {
          "cancel": "Cancelar",
          "fill": "Llenar",
          "fillHorizontal": "Llenar celdas horizontalmente",
          "fillVertical": "Llenar celdas verticalemente",
          "info": "Información"
      },
      "buttons": {
          "copy": "Copiar",
          "copySuccess": {
              "_": "Copiado con exito",
              "1": "Fila copiada con exito"
          },
          "copyTitle": "Tabla Copiada",
          "createState": "Crear estado",
          "pageLength": {
              "_": "ver %d filas",
              "-1": "Ver todas las Filas",
              "1": "Ver una fila"
          },
          "renameState": "Renombrar",
          "updateState": "Actualizar",
          "csv": "CSV",
          "excel": "Excel",
          "pdf": "PDF",
          "collection": "Colección",
          "colvis": "Visibilidad Columna",
          "colvisRestore": "Restaurar Visibilidad",
          "copyKeys": "Presione Inicio + C para copiar la información de la tabla.  Para Cancelar hacer click en este mensaje para o ESC",
          "print": "Imprimir",
          "removeAllStates": "Eliminar todos los estados",
          "removeState": "Eliminar",
          "savedStates": "Estados Guardados",
          "stateRestore": "Estado %d"
      },
      "datetime": {
          "months": {
              "0": "Enero",
              "1": "Febrero",
              "10": "Noviembre",
              "11": "Diciembre",
              "2": "Marzo",
              "3": "Abril",
              "4": "Mayo",
              "5": "Junio",
              "6": "Julio",
              "7": "Agosto",
              "8": "Septiembre",
              "9": "Octubre"
          },
          "weekdays": {
              "0": "Dom",
              "1": "Lun",
              "2": "Mar",
              "4": "Jue",
              "5": "Vie",
              "3": "Mié",
              "6": "Sáb"
          },
          "amPm": [
              "am",
              "pm"
          ],
          "previous": "Anterior",
          "next": "Siguiente",
          "hours": "Hora",
          "minutes": "Minuto",
          "seconds": "Segundo",
          "unknown": "Desconocido"
      },
      "editor": {
          "close": "Cerrar",
          "create": {
              "button": "Nuevo",
              "submit": "Crear",
              "title": "Crear nueva entrada"
          },
          "edit": {
              "button": "Editar",
              "submit": "Actualizar",
              "title": "Editar Registro"
          },
          "remove": {
              "button": "Borrar",
              "submit": "Borrar",
              "title": "Borrar",
              "confirm": {
                  "_": "Esta seguro de eliminar %d registros",
                  "1": "Esta seguro de eliminar 1 registro"
              }
          },
          "multi": {
              "info": "Los elementos seleccionados contienen diferentes valores para esta entrada. Para editar y configurar todos los elementos de esta entrada en el mismo valor, haga clic o toque aquí, de lo contrario, conservar sus valores individuales.",
              "noMulti": "Múltiples valores",
              "title": "Valores multiples",
              "restore": "Deshacer cambios"
          },
          "error": {
              "system": "Ha ocurrido un error del sistema ( Mas Información)"
          }
      },
      "emptyTable": "Tabla Vacia",
      "infoEmpty": "Sin informacion",
      "lengthMenu": "Entradas",
      "loadingRecords": "Cargando...",
      "searchBuilder": {
          "button": {
              "_": "Creador de búsquedas (%d)",
              "0": "Creador de búsquedas"
          },
          "clearAll": "Quitar filtro",
          "data": "Datos",
          "logicAnd": "Y",
          "logicOr": "O",
          "value": "Valor",
          "add": "Agragar condición",
          "condition": "Condición",
          "conditions": {
              "date": {
                  "after": "Después",
                  "before": "Antes",
                  "between": "Entre",
                  "empty": "Vacío",
                  "equals": "Igual",
                  "not": "No",
                  "notBetween": "No Entre",
                  "notEmpty": "No Vacío"
              },
              "number": {
                  "between": "Entre",
                  "empty": "Vacío",
                  "equals": "Igual",
                  "gt": "Mayor",
                  "gte": "Mayor o Igual",
                  "lt": "Menor",
                  "lte": "Menor o Igual",
                  "not": "No",
                  "notBetween": "No Entre",
                  "notEmpty": "No vacío"
              },
              "string": {
                  "contains": "Contine",
                  "empty": "Vacío",
                  "endsWith": "Termina en",
                  "equals": "Iguales",
                  "not": "No",
                  "notEmpty": "No Vacío",
                  "startsWith": "Empieza en",
                  "notContains": "No Contiene",
                  "notStartsWith": "No empieza en",
                  "notEndsWith": "No finaliza en"
              },
              "array": {
                  "equals": "Iguales",
                  "empty": "Vacío",
                  "contains": "Contiene",
                  "not": "No",
                  "notEmpty": "No Vacío",
                  "without": "Con"
              }
          },
          "deleteTitle": "Eliminar regla",
          "leftTitle": "Izquierda",
          "rightTitle": "Derecha",
          "title": {
              "0": "Generador de Consultas",
              "_": "Generador de Consultas (%d)"
          }
      },
      "searchPanes": {
          "clearMessage": "Borrar Filtro",
          "collapseMessage": "desplegar todo",
          "loadMessage": "Cargando informacion",
          "showMessage": "Mostrar todos",
          "title": "Filtros Activos - %d",
          "collapse": {
              "0": "Paneles de Búsqueda",
              "_": "Paneles de Búsqueda (%d)"
          },
          "count": "Cuenta",
          "countFiltered": "Cuenta Filtro",
          "emptyPanes": "No hay información"
      },
      "searchPlaceholder": "Busqueda en tabla",
      "select": {
          "cells": {
              "_": "%d celdas seleccionadas",
              "1": "1 celda seleccionada"
          },
          "columns": {
              "_": "%d columnas seleccionadas",
              "1": "1 columna seleccionada"
          },
          "rows": {
              "1": "Fila seleccionada",
              "_": "Filas Seleccionadas"
          }
      },
      "aria": {
          "sortAscending": "Activar para ordenar ascendente",
          "sortDescending": "Activar para ordenar descendente"
      },
      "decimal": ".",
      "infoFiltered": "filtrado de _MAX_ entradas totales",
      "infoThousands": ",",
      "paginate": {
          "first": "Primero",
          "last": "Último",
          "next": "Siguiente",
          "previous": "Anterior"
      },
      "processing": "Procesando...",
      "search": "Buscar:",
      "thousands": ",",
      "zeroRecords": "No se encontro información",
      "stateRestore": {
          "creationModal": {
              "button": "Crear",
              "columns": {
                  "search": "Búsqueda columnas",
                  "visible": "Visibilidad de columa"
              },
              "name": "Nombre:",
              "order": "Ordenar",
              "paging": "Paginado",
              "scroller": "Posición desplazamiento",
              "search": "Buscar",
              "searchBuilder": "Generador de Consultas",
              "select": "Seleccionar",
              "title": "Crear Nuevo Estado",
              "toggleLabel": "Incluir:"
          },
          "duplicateError": "Ya existe un estado con este nombre",
          "emptyError": "El nombre no puede estar vacío",
          "emptyStates": "Estado sin Guardar",
          "removeConfirm": "Esta seguro de eliminar el estado %d?",
          "removeError": "Error al eliminar el estado",
          "removeJoiner": "y",
          "removeSubmit": "Eliminar",
          "removeTitle": "Eliminar Estado",
          "renameButton": "Eliminar",
          "renameLabel": "Nuevo nombre para %s",
          "renameTitle": "Renombrar Estado"
      },
      "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      "infoPostFix": ""
    }
};


$(document).ready(function() {
  $('#example').DataTable(dataTableOptions);
});

//--========================================================== -->
//--Scrip para cerrar sesion-->
//--========================================================== -->

$(document).ready(function() {
    $('#logoutButton').on('click', function(event) {
        event.preventDefault();

        $.ajax({
            url: '/api/usuarios/logout',  
            method: 'POST',  
            success: function(response) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Sesión cerrada!',
                    text: response.mensaje,
                    confirmButtonText: 'Aceptar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/';  
                    }
                });
            },
            error: function(xhr) {
                let mensajeError = 'Ocurrió un error al cerrar la sesión';
                if (xhr.responseJSON && xhr.responseJSON.mensaje) {
                    mensajeError = xhr.responseJSON.mensaje;
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: mensajeError,
                });
            }
        });
    });
});

//--========================================================== -->
//--Scrip para agregar producto al carrito-->
//--========================================================== -->

$(document).ready(function() {
    const offcanvas = $('#offcanvasRight');

    // Al hacer clic en el botón de añadir al carrito
    $('.btn-carrito').on('click', function() {
        const productoId = $(this).data('id');
        
        // Lógica para añadir el producto al carrito
        $.ajax({
            url: `/api/carrito/agregar/${productoId}`,
            method: 'POST',
            data: { cantidad: 1 },
            success: function(response) {
                actualizarCarrito();
                alert(response); // Mensaje de éxito
            },
            error: function(err) {
                alert(err.responseText); // Mensaje de error
            }
        });
    });

    function actualizarCarrito() {
        $.ajax({
            url: '/api/carrito',
            method: 'GET',
            success: function(carrito) {
                $('#carrito-productos').empty();
                let total = 0;

                carrito.productos.forEach(item => {
                    const precio = item.productoId.precio * item.cantidad;
                    total += precio;
                    $('#carrito-productos').append(`
                        <div class="producto">
                            <h6>${item.productoId.nombre} (x${item.cantidad})</h6>
                            <button class="btn-eliminar" data-id="${item.productoId._id}">Eliminar</button>
                        </div>
                    `);
                });

                $('#total').text(total.toFixed(2));

                // Lógica para eliminar un producto
                $('.btn-eliminar').on('click', function() {
                    const productoId = $(this).data('id');
                    $.ajax({
                        url: `/api/carrito/eliminar/${productoId}`,
                        method: 'POST',
                        success: function(response) {
                            actualizarCarrito(); // Actualiza el carrito
                            alert(response); // Mensaje de éxito
                        },
                        error: function(err) {
                            alert(err.responseText); // Mensaje de error
                        }
                    });
                });
            }
        });
    }

    // Cuando se abre el offcanvas, actualizar el carrito
    offcanvas.on('show.bs.offcanvas', function () {
        actualizarCarrito();
    });
});


  

