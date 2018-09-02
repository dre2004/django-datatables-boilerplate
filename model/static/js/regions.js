var dt_language = {
    "emptyTable":     "No data available in table",
    "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
    "infoEmpty":      "Showing 0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing":     "Processing ...",
    "search":         "Filter:",
    "zeroRecords":    "No matching records found",
    "paginate": {
        "first":      "First",
        "last":       "Last",
        "next":       "Next",
        "previous":   "Previous"
    },
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
        "sortDescending": ": activate to sort column descending"
    }
}

requirejs(["datatables", 
            "datatables-bootstrap",
            "datatables.net-buttons-bootstrap",
            "datatables.net-buttons",
            "datatables.net-buttons-html5",
            "responsive.bootstrap",
            "datatables.net-responsive"
            ], function() {
        $(document).ready(function() {
            var Table = $('#datatable').dataTable({
                language: dt_language,
                order: [[0, "desc"]],
                lengthMenu: [[50, 100, 150, 200], [50, 100, 150, 200]],
                columnDefs: [
                    {
                        orderable: true,
                        searchable: true,
                        className: "center",
                        targets: [0, 1]
                    }
                ],
                searching: true,
                processing: true,
                serverSide: true,
                stateSave: true,
                ajax: JSON_URL,
                //dom: "<'row'<'col-sm-9 col-md-9 col-lg-9'B><'col-sm-3 col-md-3 col-lg-3'f>>rt<'row'<'col-sm-3 col-md-3 col-lg-3'i><'col-sm-6 col-md-6 col-lg-6 col-sm-offset-2 col-md-offset-2 col-lg-offset-2'p><'col-sm-1 col-md-1 col-lg-1'l>>",
                buttons: [ 'copy', 'excel', 'pdf'],
                dom: "<'row'<'col col-sm-6 col-md-6 col-lg-6 dt_top_lt'l><'col col-sm-6 col-md-6 col-lg-6 dt_top_rt'f>><'top'B>r<'table_data't><'bottom'p><'clear'>",
            });
        });
});