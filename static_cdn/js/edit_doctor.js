$(function() {
    $('body').on('click', 'button.edit', function () {
        var edi = $(this).attr('data-id');
        $(this).fadeOut(2000, function () {
            $(this).closest($('div.card')).find('button.save').fadeIn(1000).end().find('button.cancel').fadeIn(1000);
            // $(this).closest($('div.card')).find('button.save').fadeIn(1000);
            // $(this).closest($('div.card')).find('button.cancel').fadeIn(1000);
        });
        var cd = $(this).closest($('div.card'));
        cd.find('.doctor_name').replaceWith('<label class="doctor_name"><h1>Name :</label>&emsp;<input type="text" value="' + cd.find('.doctor_name').text().slice(6) + '"></h1>');
        cd.find('.price').replaceWith('<label class="price"><h5>Price :</label>&emsp;<input type="text" value="' + cd.find('.price').text().slice(7) + '"></h5>');
        cd.find('.phone').replaceWith('<label class="phone"><h5>Phone :</label>&emsp;<input type="text" value="' + cd.find('.phone').text().slice(10) + '"></h5>');
        cd.find('.discount').replaceWith('<label class="discount"><h5>Discount :</label>&emsp;<input type="text" value="' + cd.find('.discount').text().slice(10) + '"></h5>');
        cd.find('.description').replaceWith('<label class="description"><h5>Description :</label>&emsp;<input type="text" value="' + cd.find('.description').text().slice(13) + '"></h5>');
        cd.find('.category').replaceWith('<label class="category"><h5>Category :</label>&emsp;<input type="text" value="' + cd.find('.category').text().slice(10) + '"></h5>');
    });

    $('body').on('click', 'button.cancel', function () {
        var dc = $(this).closest($('div.card'));
        dc.find('button.cancel').fadeOut(1000).end().find('button.save').fadeOut(1000, function () {
            dc.find('button.edit').fadeIn(1000);
        });

        dc.find('.doctor_name').replaceWith('<h1 class="doctor_name">Name :' + $('.doctor_name > h1 > input').val() + '</h1>');
        dc.find('.price').replaceWith('<h5 class="price">Price :' + $('.price > h5 > input').val() + '</h5>');
        dc.find('.phone').replaceWith('<h5 class="phone">Phone :' + $('.phone > h5 > input').val() + '</h5>');
        dc.find('.discount').replaceWith('<h5 class="discount">Discount :' + $('.discount > h5 > input').val() + '</h5>');
        dc.find('.description').replaceWith('<h5 class="description">Description :' + $('.description > h5 > input').val() + '</h5>');
        dc.find('.category').replaceWith('<h5 class="category">Category :' + $('.category > h5 > input').val() + '</h5>');
    });

    $('body').on('click', 'button.save', function () {
        var id = $(this).attr('data-id');
        var dc = $(this).closest($('div.card'));
        // dc.find('button.save').fadeOut(1000).end().find('button.cancel').fadeOut(1000, function () {
        //     dc.find('button.edit').fadeIn(1000);
        // });

        // dc.find('.product_name').replaceWith('<h1 class="product_name">Name :' + $('.product_name > h1 > input').val() + '</h1>');
        // dc.find('.price').replaceWith('<h5 class="price">Price :' + $('.price > h5 > input').val() + '</h5>');
        // dc.find('.phone').replaceWith('<h5 class="phone">Quantity :' + $('.phone > h5 > input').val() + '</h5>');
        // dc.find('.discount').replaceWith('<h5 class="discount">Discount :' + $('.discount > h5 > input').val() + '</h5>');
        // dc.find('.description').replaceWith('<h5 class="description">Description :' + $('.description > h5 > input').val() + '</h5>');
        // dc.find('.category').replaceWith('<h5 class="category">Category :' + $('.category > h5 > input').val() + '</h5>');

        // if(dc.find('.price > h5 > input').val().length === 0){
        //     alert("you have not write a price!");
        //     dc.find('.price > h5 > input').focus()}
        // else
        if(dc.find('.price > h5 > input').val().length > 10){
            alert("price must be between 1 and 10 letter length!");
            dc.find('.price > h5 > input').focus()}
        else if(dc.find('.phone > h5 > input').val().length === 0){
            alert("you have not write a phone!");
            dc.find('.phone > h5 > input').focus()}
        else if(dc.find('.phone > h5 > input').val().length > 10){
            alert("phone must be between 1 and 10 letter length!");
            dc.find('.phone > h5 > input').focus()}

        else if(dc.find('.description > h5 > input').val().length === 0){
            alert("you have not write a description!");
            dc.find('.description > h5 > input').focus()}
        else if(dc.find('.description > h5 > input').val().length < 10){
            alert("description must be equal or greater than 10 letter length!");
            dc.find('.description > h5 > input').focus()}
        else {
            dc.find('button.save').fadeOut(1000).end().find('button.cancel').fadeOut(1000, function () {
                dc.find('button.edit').fadeIn(1000);
            });
            $.ajax({
                url: '/api/doctors/update/' + id + '/',
                type: 'PUT',
                data: JSON.stringify({
                    'name': $('.doctor_name > h1 > input').val(),
                    'price': $('.price > h5 > input').val(),
                    'phone': $('.phone > h5 > input').val(),
                    'discount': $('.discount > h5 > input').val(),
                    'description': $('.description > h5 > input').val(),
                    'category': $('.category > h5 > input').val()
                }),
                contentType: 'application/json;charset=UTF-8',
                success: function (response) {
                    dc.find('.doctor_name').replaceWith('<h1 class="doctor_name">Name :' + $('.doctor_name > h1 > input').val() + '</h1>');
                    dc.find('.price').replaceWith('<h5 class="price">Price :' + $('.price > h5 > input').val() + '</h5>');
                    dc.find('.phone').replaceWith('<h5 class="phone">Phone :' + $('.phone > h5 > input').val() + '</h5>');
                    dc.find('.discount').replaceWith('<h5 class="discount">Discount :' + $('.discount > h5 > input').val() + '</h5>');
                    dc.find('.description').replaceWith('<h5 class="description">Description :' + $('.description > h5 > input').val() + '</h5>');
                    dc.find('.category').replaceWith('<h5 class="category">Category :' + $('.category > h5 > input').val() + '</h5>');
                    alert('Edited successfully!');
                },
                error: function (error) {
                    console.log(error);
                    alert('error updating doctor information');
                }
            });
        }
    });

});