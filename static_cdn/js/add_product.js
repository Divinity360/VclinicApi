$(function() {
    $('.form button.save').on('click', function () {

        var newDoctor = {
            name: $('input.doctor_name').val(),
            price: $('input.price').val(),
            phone: $('input.phone').val(),
            discount: $('input.discount').val(),
            description: $('input.description').val(),
            category: $('input.category').val()
        };
        console.log(newDoctor);
        if(newDoctor.name.length === 0){
            alert("you have not write a doctor name!");
            $('input.doctor_name').focus()}
        else if(newDoctor.price.length === 0){
            alert("you have not write a price!");
            $('input.price').focus()}
        else if(newDoctor.phone.length === 0){
            alert("you have not write a phone!");
            $('input.phone').focus()}
        else if(newDoctor.description.length <= 10){
            alert("your description is less than 10 letters!");
            $('input.description').focus()}
        else if(newDoctor.category.length === 0){
            alert("you have not write a category!");
            $('input.category').focus()}
        else if(newDoctor.discount.length === 0){
            alert("are you sure you did not want a discount?");
            $('input.discount').val(0)}

        else {
            $.ajax({
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Token " + getCookie('csrftoken'));
                },
                url: '/api/doctors/add/',
                type: 'POST',
                data: JSON.stringify(newDoctor),
                dataType: "json",
                contentType: 'application/json;charset=UTF-8',
                success: function (response) {
                    console.log(response, newDoctor);

                    $('.cards-warpper').prepend('<div class="card card-number-'  + response.id + '">\n' +
                        '<button class="delete" title="Delete Doctor" data-value="' + response.id + '">Delete</button>' +
                        '<button class="edit" title="Edit Doctor" data-id="' + response.id + '">Edit</button>' +
                        '<button class="save" title="Save Edit" style="display: none;" data-id="' + response.id + '">Save</button>' +
                        '<button class="cancel" title="Cancel Edit" style="display: none;" data-id="' + response.id + '">Cancel</button>' +
                        '<div class="id">' + response.id + '</div>\n' +
                        '<h1 class="doctor_name">Name: ' + response.name + '</h1>\n' +
                        '<h5 class="price">Price: ' + response.price + '</h5>\n' +
                        '<h5 class="phone">Phone: ' + response.phone + '</h5>\n' +
                        '<h5>Number of views: ' + 0 + '</h5>\n' +
                        '<h5>Number of sales: ' + 0 + '</h5>\n' +
                        // '<h5>Files: ' + response.files + '</h5>\n' +
                        '<h5 class="discount">Discount: ' + response.discount + '</h5>\n' +
                        '<h5 class="description" style="overflow: hidden;">Description: ' + response.description + '</h5>\n' +
                        '<h5>Create date: ' + response.added + '</h5>\n' +
                        '<h5>Update date: ' + response.updated + '</h5>\n' +
                        '<h5 class="category">Category: ' + response.category + '</h5>\n' +
                        '</div>');
                    $('input.doctor_name').val('');
                    $('input.price').val('');
                    $('input.phone').val('');
                    $('input.discount').val('');
                    $('input.description').val('');
                    $('input.category').val('');
                },
                error: function (error) {
                    console.log(error);
                    alert('error saving doctor');
                }
            });
        }
    });

});