var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        alert("something is not good! ")
    }
    resetForm();
}



//Retrieve the data
function readFormData(){
    var formData = {};
    formData["product"] = document.getElementById("product").value;
    formData["productImage"] = document.getElementById("productImage").value;
    formData["productDes"] = document.getElementById("productDes").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.product;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.productImage;
         //for image

    im = document.getElementById("productImage");

    const files = im.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(files);

    fileReader.addEventListener("load",function(){

        cell2.innerHTML = '<img class="product_img" src="'+ this.result + '"/>';

    });
       
        cell2.style= "width: 20px; height: 20px; border: 1px solid black; background-position: center; background-size: cover";
        cell2.id="productImage";
        console.log(cell2.id);
        
        
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.productDes;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.qty;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.perPrice;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onBuy()'>Buy</button> <button onClick='onDelete(this)'>Delete</button>`
        return table;

    }


//Insert into cart
function onBuy(){
    var td = event.target.parentElement;
    var tr=td.parentElement;
    console.log(tr);
    console.log(tr.cells[0].innerHTML);

    var table = document.getElementById("cartList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var name = newRow.insertCell(0);
        name.innerHTML = tr.cells[0].innerHTML;
    var image = newRow.insertCell(1);
        image.innerHTML = tr.cells[1].innerHTML;
    
       
        image.style= "width: 20px; height: 20px; border: 1px solid black; background-position: center; background-size: cover";
        image.id="productImage";
        console.log(image.id);
        
        
        var des = newRow.insertCell(2);
        des.innerHTML = tr.cells[2].innerHTML;
    var qty = newRow.insertCell(3);
        qty.innerHTML = tr.cells[3].innerHTML;
    var price = newRow.insertCell(4);
        price.innerHTML = tr.cells[4].innerHTML;
        var total =tr.cells[3].innerHTML * tr.cells[4].innerHTML;
        var cell6 = newRow.insertCell(5);
        cell6.innerHTML =total;
        var cell7 = newRow.insertCell(6);
        cell7.innerHTML= `<button onClick='onRemove(this)'>Remove</button>`
}

//Remove the data
function onRemove(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('cartList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('product').value = '';
     document.getElementById('productImage').value = '';
    document.getElementById('productDes').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}