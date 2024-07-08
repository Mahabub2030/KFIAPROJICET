$(document).ready(function() {

    var table = $('#example').DataTable({

        buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
    });

    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');
});

// Random
// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove'],
//         columnDefs: [
//             // Define column rendering for the C4 column
//             {
//                 targets: 3, // Index of the C4 column (zero-based)
//                 render: function(data, type, row, meta) {
//                     // Parse the expiration date from the data
//                     var expirationDate = new Date(data);
//                     // Get the current date
//                     var currentDate = new Date();
//                     // Check if expiration date is near (within 7 days)
//                     if (expirationDate - currentDate < 7 * 24 * 60 * 60 * 1000 && expirationDate - currentDate > 0) {
//                         // Return the data with a CSS class for highlighting
//                         return '<div class="near-expiry">' + data + '</div>';
//                     } else {
//                         // Return the data as is
//                         return data;
//                     }
//                 }
//             }
//         ]
//     });

//     // Move buttons container to desired location
//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });

  
    


