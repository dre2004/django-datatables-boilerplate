requirejs.config({
    baseUrl: "/static/js",
    paths: {
        "jquery": "https://code.jquery.com/jquery-3.3.1.min",
        "bootstrap": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.bundle.min",
        "jszip": "https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min",
        "pdfmake": "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min",
        "vfs_fonts": "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts",
        "datatables": "https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min",
        "datatables-bootstrap": "https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min",
        "datatables.net-buttons": "https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min",
        "datatables.net-buttons-bootstrap": "https://cdn.datatables.net/buttons/1.5.2/js/buttons.bootstrap4.min",
        "datatables.net-buttons-html5": "https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min",
        "datatables.net-responsive": "https://cdn.datatables.net/responsive/2.2.2/js/dataTables.responsive.min",
        "responsive.bootstrap": "https://cdn.datatables.net/responsive/2.2.2/js/responsive.bootstrap4.min"
    },
    map: {
        "*": {
            "datatables.net": "datatables",
            "datatables.net-bs4": "datatables-bootstrap",
        }
    },
    shim: {
        "bootstrap": ["jquery"],
        "datatables-bootstrap": ["datatables"],
        "datatables": ["bootstrap", "vfs_fonts"],
        "vfs_fonts": ["pdfmake"]
    },
});