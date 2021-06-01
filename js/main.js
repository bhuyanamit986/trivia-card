$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(600);
  })
  $('.wrong-answer-one').on('click', () => {
    $('.smiley').hide()
    $('.wrong-answer-one').fadeOut('slow')
    $('.frown').show()
  })
  $('.wrong-answer-two').on('click', () => {
    $('.smiley').hide()
    $('.wrong-answer-two').fadeOut('slow')
    $('.frown').show()
  })
  $('.wrong-answer-three').on('click', () => {
    $('.smiley').hide()
    $('.wrong-answer-three').fadeOut('slow')
    $('.frown').show()
  })
  $('.correct-answer').on('click', () => {
    $('.frown').hide()
    $('.smiley').show()
  })
});
