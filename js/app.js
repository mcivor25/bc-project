$(function(){
  $('#refine-search').click(function(){
    $('#search-popover').toggleClass('popover-active');
  });
  $('#cancel-refine').click(function(){
    $('#search-popover').removeClass('popover-active');
  });
});

  var count = 1;
  var btnCount = 1;

$('#createSingle').click(function(){
  $('#mainForm').append('<div class="form-group" id="'+count+'"><div class="group--number"><span>Section '+count+'</span></div></div>');
  $(this).html('Add Another Single Column Section');
  $('#add-to-section').addClass('add-section-'+count+'');
  count++;
});

$('#add-to-section').click(function(){
  $('#add-to-section').removeClass();
  console.log($('#add-text').val());

  var labelText = $('#add-text').val();
  var placeholderText = $('#add-placeholder').val();
  var titleText = $('#update-title').val();
  var paraText = $('#update-para').val();

  $('#1').append('<label for="#" class="module--label">'+labelText+'</label>');
  $('#1').append('<input type="text" class="form-control module-input--text" required placeholder="'+placeholderText+'">');

  $('#header-title').html(titleText + '<a href="javascript:void(99)" class="button button--textonly button--default" id="edit-title">Edit</a>');
  $('#header-para').html(paraText);
  $('.custom-header').slideUp();
});


$('#addText').click(function(){
  $('#customSettings').append('<div class="form-group"><label for="#" class="module--label">Label Message</label><input type="text" pattern=".{3,}" class="form-control module-input--text" id="add-text" required placeholder="What will your label say?"><label for="#" class="module--label">Placeholder Message</label><input type="text" pattern=".{3,}" class="form-control module-input--text" id="add-placeholder" required placeholder="What will your placeholder say?"></div>');
  $('#customise-header').html('Text Boxes');
});
$('#edit-title').click(function(){
  $('#customSettings').append('<div class="form-group custom-header"><label for="#" class="module--label">Form Title</label><input type="text" class="form-control module-input--text" id="update-title" required placeholder="What is your form called?"><label for="#" class="module--label">Form Introduction</label><input type="text" class="form-control module-input--text" id="update-para" required placeholder="What will your intro say?"></div>');
  $('#customise-header').html('Create Your Intro');
});
