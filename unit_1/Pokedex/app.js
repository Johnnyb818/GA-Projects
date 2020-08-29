const $pokemonImage = $('<img>')
const $pictureBtn = $('.picture-btn')
const $polaroid = $('.modal-polaroid')
const $signature = $('.modal-polaroid-sig')

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
            $('#type').html(data.types.map( type => type.type.name).join(', ')),
            $pokemonImage.attr("src", data.sprites['front_default']);
            $pokemonImage.prependTo($polaroid);
            $pictureBtn.attr('id', data.name); 
            $signature.text(data.name)        
    })
})

const closePolaroid = () => {
  $('#modal').css('display', 'none')
}
const openPolaroid = () => {
    $('#modal').css('display', 'block')
    $('#close-btn').css('display', 'none')
}
const signature = () => {
    $signature.css('display', 'block')
    $('#signature-btn').css('display', 'none')
    $('#close-btn').css('display', 'flex')   
}
$('#close-btn').on('click', closePolaroid)
$('.polaroid-btn').on('click', openPolaroid)
$('#signature-btn').on('click', signature)