$(document).ready(function(){
	/* gnb */
	var togglemenu = function(){
		$('.menuWrap').toggleClass('active');
	};
	
	$('.btnMenu').click(togglemenu);
	
	$('.menuWrap .dim').click(function(){
        $('.menuWrap').removeClass('active');
    });
	
    /* input width btn */
    var input_key = function(){
        if ( $(this).val().length > 0 ){
            $(this).siblings('button').removeAttr('disabled');
        } else {
            $(this).siblings('button').attr('disabled', true);
        }
        
        var key_length = $(this).val().length,
            max_length =  $(this).attr('maxlength');
        
        if (key_length == max_length){
            $(this).siblings('button').addClass('comp');
        } else {
            $(this).siblings('button').removeClass('comp');
        }
    };
    
    $('.with_btn input').keyup(input_key);
    
    /* check list item */
	/*var check_all = $('input[name=chk_all]');
	var check_item = $('input[name=chk_item]');*/
    
    $('body').on('click', function(){    
        $('input[name=chk_all]').click(function(){
            var all_checked = $(this).prop('checked');
            var check_list = $(this).closest('.chk_list').find('.chk_items input[name=chk_item]');

            check_list.prop('checked', all_checked);
        });

        $('input[name=chk_item]').change(function(){
            var itemp = $(this).closest('.chk_items');
            var item_length = itemp.find('input[name=chk_item]').length;
            var checked_lengh = itemp.find('input[name=chk_item]:checked').length;
            var select_all = (item_length == checked_lengh);

            itemp.siblings('.chk_items_all').find('input[name=chk_all]').prop('checked', select_all);
        });
    });
    /* agreement chk list */
    $('.agreement_list').children('.chk_items').find('input[name=chk_item]').click(function(){
        if ( $(this).prop('checked') == true ) {
            $(this).closest('li').addClass('on'); 
        } else {
            $(this).closest('li').removeClass('on'); 
        }
    });
    
    /* input + btn area */
    $('.input_btn input[type=text]').keyup(function(){
        var input_on = $(this).val();
        if( input_on.length > 0 ){
            $(this).parent().addClass('on');  
        } else {
            $(this).parent().removeClass('on');  
        }
    });
    
    $('.btn_del').click(function(){
        $(this).parent().removeClass('on');
        $(this).siblings('input[type=text]').val('');
    });
    
    /* fixed top */
    if( $('.fixed_top').length > 0 ){
        var fixed_area = $('.fixed_top').outerHeight();
        $('.fixed_top + *').css('padding-top', fixed_area);
    }
   
    /* select box */
    $('.select_box .selected').click(function(){
        $(this).siblings('.select_list').slideToggle(200);
        $(this).closest('.select_box').toggleClass('active');
    });
    
    $('.select_list li').click(function(){
        var sList = $(this).closest('.select_list');
        var selected = $(this).find('a').text();
        
        $('.select_list li').removeClass('active'); 
        $(this).addClass('active');
        sList.slideUp(200);
        sList.siblings('.selected').text(selected);
    });
    
    /* popup */
    $('.pop_button button, .ic_close').click(function(){
        $(this).closest('.popWrap').fadeOut();
    });
    
    /* map point area */
    var mapH = $('.map_area').outerHeight(),
        mapV = mapH - $('.search_box').outerHeight();
    
    $('.point_area').css('height', mapV + 'px');
});