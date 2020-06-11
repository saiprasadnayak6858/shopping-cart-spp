$(document).ready(() => {
    checkCart();
})
    //Add or remove items from cart
  function changeCart(id){
      if($(id).hasClass('btn-success')){
          $('#no-item').remove();
     let item = $(id).parent().closest('div');
      $(id).parent().remove();
      $('#myCart').append(item);
      $(id).html('Remove').removeClass('btn-success').addClass('btn-danger');
      }
      else{
      let item = $(id).parent().closest('div');
      $(id).parent().remove();
      $('#shopCart').append(item);
      $(id).html('Add to Cart').removeClass('btn-danger').addClass('btn-success');
      }
      checkCart();
  }
  //Check cart's status
  function checkCart(){
    //Check shopCart
      if($('#shopCart .btn').length == 0){
          $('#shopCart').append('<h3 class="text-center mt-2" id="no-item">No Items</h3>');
      }
      else{
          $('#shopCart #no-item').remove();
      }
      //Check myCart
      if($('#myCart .btn').length == 0){
          $('#myCart').append('<h3 class="text-center mt-2" id="no-item">No Items</h3>');
      }
      else{
          $('#myCart #no-item').remove();
      }
      calculateTotal()
  }
  //Calculate price for items added to myCart
  function calculateTotal(){
      let totalPrice = 0;
      $('#myCart #item').each(function(){
          totalPrice = totalPrice + $(this).data('price');
      })
      $('#price').text(`Total Price:Rs.${totalPrice}/-`)
  }