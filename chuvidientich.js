function tinh() {
    let bk=document.getElementById('bankinh').value;
    if (!bk){
        document.getElementById('C').value='không được để trống';
        document.getElementById('S').value='không được để trống';
    }
    else {
        let _chuvi=2*3.14*bk;
        let _dientich=3.14*bk*bk;
        document.getElementById('C').value=_chuvi;
        document.getElementById('S').value=_dientich;
    }
}