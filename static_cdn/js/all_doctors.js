$(function() {
    // $('body').on('click', 'button.delete', function () {
    //     console.log($(this).attr('data-value'));
    // });
    $.ajax({
        url: '/api/doctors/all/',
        type: 'GET',
        success: function (doctors) {
            console.log(doctors);
            $('span.loading').remove();
            $.each(doctors, function (p, doctor) {
                $('.cards-warpper').append('<div class="card card-number-'  + doctor.id + '">\n' +
                    '<button class="delete" title="Delete Doctor" data-value="' + doctor.id + '">Delete</button>' +
                    '<button class="edit" title="Edit Doctor" data-id="' + doctor.id + '">Edit</button>' +
                    '<button class="save" title="Save Edit" style="display: none;" data-id="' + doctor.id + '">Save</button>' +
                    '<button class="cancel" title="Cancel Edit" style="display: none;" data-id="' + doctor.id + '">Cancel</button>' +
                    '<div class="id">' + doctor.id + '</div>\n' +
                    '<h1 class="doctor_name">Doctor Name: ' + doctor.name + '</h1>\n' +
                    '<h5 class="price">Doctor Charges Price: ' + doctor.price + '</h5>\n' +
                    '<h5 class="phone">Phone: ' + doctor.phone + '</h5>\n' +
                    '<h5>Number of views: ' + doctor.number_of_views + '</h5>\n' +
                    '<h5>Number of sales: ' + doctor.number_of_sales + '</h5>\n' +
                    // '<h5>Files: ' + product.files + '</h5>\n' +
                    '<h5 class="discount">Charges Discount: ' + doctor.discount + '</h5>\n' +
                    '<h5 class="description" style="overflow: hidden;">Doctor Position: ' + doctor.description + '</h5>\n' +
                    '<h5>Create date: ' + doctor.added + '</h5>\n' +
                    '<h5>Update date: ' + doctor.updated + '</h5>\n' +
                    '<h5 class="category">Doctor Category: ' + doctor.category + '</h5>\n' +
                    '</div>');
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
            var err = JSON.parse(xhr.responseText);
            alert(err.ErrorMessage);
        }
        //     doctors.forEach((item) => {
        //         $('.cards-warpper').append(`
        //             <div class="card">
        //                 <div class="id">${item.id}</div>
        //                 <h1>Name: ${item.product_name}</h1>
        //                 <h5>Price: ${item.price}</h5>
        //                 <h5>Quantity: ${item.phone}</h5>
        //                 <h5>Number of views: ${item.number_of_views}</h5>
        //                 <h5>Number of sales: ${item.number_of_sales}</h5>
        //                 <h5>Files: ${item.files}</h5>
        //                 <h5>Discount: ${item.discount}</h5>
        //                 <h5 style="overflow: hidden;">Description: ${item.description}</h5>
        //                 <h5>Create date: ${item.create_date}</h5>
        //                 <h5>Category: ${item.category}</h5>
        //             </div>
        //         `)
        // })
        // },
        // error: function (error) { // if ajax couldn't get the data for some resone it will run this function
        //     console.log(error)
        // }
    });

});