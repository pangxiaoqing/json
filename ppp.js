;!function(){
	  var data_obj = {
	    data : null,
	    arr : []
	  }
	  $(document.body).click(function(e){
	    var target = e.target,
	        _data = data_obj.data;
	        data_obj.arr = [];
	    if(target.nodeName === 'A'){
	      if(!$(target).attr('previd')){
	        $('.resul').html('')
	        for(var index in _data[target.id]['group']){
	          var element = _data[target.id]['group'][index];console.log(element,target.id,index)
	          data_obj.arr.push("<a class='btn' previd="+target.id+" id="+index+">"+element.name+"</a>" );
	        }
	        $('.childs').html(data_obj.arr.join(''));
	      }else{

	        $(_data[$(target).attr('previd')]['group'][target.id]['classification']).each(function(index,element){
	          data_obj.arr.push("<span>"+element+"</span><br/>");
	        });
	        $('.resul').html(data_obj.arr.join(''));
	      }
	    }
	  });
	  $.getJSON('a.json',function(res){
	    data_obj.data = res;
	    // console.log(res);
	    //遍历出第一级内容，并添加到.box下
	    for(var key in res){
	      var str = "<a class='btn' id="+key+">"+res[key].name+"</a>" ;
	      $('.box').append(str);
	    }​