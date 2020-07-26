function SubmitFormData() {
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	//var file = $("#file").get(0).files[0];

	document.getElementById('file').addEventListener('change', (e)=>{
		const name = document.getElementById('file');
		var file = e.target.files[0];
		//console.log(name)
		//alert(file)
		//var file_tmpname = e.target.files[0][1];

	})
	

	var ugender = $("input[type=radio]:checked").val();

	$.post("submit.php", { ename: uname, eemail: uemail, ephone: uphone, file: file, gender: ugender, file: file },
	   function(data) {
		 $('#results').html(data);
		 $('#myForm')[0].reset();
	   });
}