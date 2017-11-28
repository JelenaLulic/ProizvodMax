
function MaxProizvod (niz) {

    var p = [];

    for (var i=0; i<niz.length; i++){
    p[i] = niz[i] * niz[i+1];
  }

 
 var max = p[0];

 for (i = 0; i < p.length; i++) {
 	if (p[i] > max) {
  	p[i] = max;
  }
}

 console.log (max);
}



var niz = [20, 3, 11, 2, 3];
MaxProizvod (niz);
  	
 
 	