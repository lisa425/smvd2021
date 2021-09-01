Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".ezkorry-roller"), function(index, item) {
      const wrapper = $("<div />", { class:"ezkorry-roller-wrapper"});
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);
  
      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while(max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }
      
      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 12000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});