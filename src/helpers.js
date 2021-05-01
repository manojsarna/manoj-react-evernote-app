export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  // Debounce here helps in real-time chat i.e it waits for 1.5s and then update 
  
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };
  // Removes HTML tags