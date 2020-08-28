const $pokemonImage = $('<img>')

$('form').on('submit', (event) => {
    event.preventDefault();
    $pokemonImage.empty();
    
    const pokemon = $('input').val();
    
    
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    }).then(
        (data) => {
            console.log(data);
            $('#name').html(data.name),
            $('#id').html(data.id),
            $('#type').html(data.types.map( type => type.type.name).join(', '))
            $pokemonImage.attr("src", data.sprites['front_default']).css({'width' : '250%' , 'height' : '250%'});
            $("#image").append($pokemonImage)
            
    })
})