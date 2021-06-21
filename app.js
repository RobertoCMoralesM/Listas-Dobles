class Producto{
    constructor(Nombre,Precio,ID,Cantidad){
            this.Nombre=Nombre;
            this.Precio=Precio;
            this.ID=ID;
            this.Cantidad=Cantidad;
            this.siguiente=null;
            this.anterior=null;
    }
    info(){
        return "Nombre: "+this.Nombre
        +"<br>"+"Precio: "+this.Precio+
        "<br>"+"ID: "+this.ID+"<br>"
        +"Cantidad: "+this.Cantidad+"<br>";
    }
  }
  
  class Inventario{
    constructor(){
        this.inicio=null;
        this.final=null;
        this.length = 0;
      }
  
  
  agregar(nuevo){
     if (this.inicio==null)
         this.inicio=nuevo;
     else{
         let i=this.inicio;
         while(i.siguiente!=null)
           i=i.siguiente;
          i.siguiente=nuevo;
   }
   }
  
  listar(){
    let search="";
    let x=this.inicio;
    while (x!=null){
      search += x.info() + "<br>"
      x=x.siguiente;
    }
    return search;
  }
  
  
  
  eliminar(ID){
   
    if (this.inicio!=null){
        if (this.inicio.ID==ID)
          this.inicio=this.inicio.siguiente;
        else{
          let t=this.inicio;
          while( t.siguiente!=null){
            if (t.siguiente.ID==ID){
              t.siguiente=t.siguiente.siguiente;
              return true;
            }
            else
              t=t.siguiente;
          }
          return false;
        }
    }
  }
  
  
  buscar(ID){
    let temp=this.inicio;
    while(temp!=null){
      if (ID==temp.ID)
        return temp;
      else
        temp=temp.siguiente;
    }
    return null;
  }
  }
  
  let Tienda=new Inventario();
  
  function limpiar(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("lista").innerHTML="";
  }
  
  function Agregar(){
    let ID,Nombre,Precio,Cantidad
    Nombre=document.getElementById("Nombre").value;
    Precio=document.getElementById("Precio").value;
    ID=document.getElementById("ID").value;
    Cantidad=document.getElementById("Cantidad").value;
    let producto=new Producto(Nombre,Precio,ID,Cantidad);
    Tienda.agregar(producto);
  
    document.getElementById("Nombre").value="";
    document.getElementById("Precio").value="";
    document.getElementById("ID").value="";
    document.getElementById("Cantidad").value="";
  
    
  }
  
  function Buscar(){
    let ID=document.getElementById("textoabuscar").value;
    let search=Tienda.buscar(ID);
    if (search==null) {
        document.getElementById("resultado").innerHTML="Ingresa el ID";
        document.getElementById("textoabuscar").value="";
    }else{
        document.getElementById("resultado").innerHTML="Se encontró<br>"+search.info();
        document.getElementById("textoabuscar").value="";
        
    }
  }
  
  function Delete(){
    let ID=document.getElementById("textoabuscar").value;
    let search=Tienda.eliminar(ID);
    if (search==null) {
        document.getElementById("resultado").innerHTML="Ingrese el ID";
        document.getElementById("textoabuscar").value="";
    }
  }
  
  
  function lista(){
    document.getElementById("lista").value="";
    let search=Tienda.listar();
    document.getElementById("lista").innerHTML=search;
    
  }