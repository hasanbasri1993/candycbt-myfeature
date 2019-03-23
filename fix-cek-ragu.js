$('#done-btn').click(function(){
          var jawab = $('#jumjawab').val();
          var soal = $('#jumsoal').val();
          var belum = soal-jawab;
          var ragu = 	$('[id^=badge]').hasClass('bg-yellow');
          if(jawab == soal){
              if(ragu){
               swal({
                type: 'warning',
                title: 'Oops...',
                html: 'Masih ada soal yang ragu !!',
              })
              }
              else{
                  swal({
              title: 'Apa kamu yakin telah selesai?',

              html:
                ' Pastikan kamu telah menyelesaikan semua soal dengan benar ! <br>' +
                'Sudah Dijawab : <b>'+jawab + '</b> Belum dijawab : <b>'+belum+'</b>',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Iya'
              }).then((result) => {
                if (result.value)
                  {	window.onbeforeunload = null;
                    $('#done-submit').click();
                  }
                })
              }

          }
          else{
          swal({
              type: 'warning',
              title: 'Oops...',
              html: 'Masih ada soal yang masih belum dikerjakan !! <br>'+
             'Sudah Dijawab : <b>'+jawab + '</b> Belum dijawab : <b>'+belum+'</b>',
            })	

          }
});
