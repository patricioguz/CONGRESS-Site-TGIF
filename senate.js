$(document).ready (
    
    function(){
        cargar_json();
        function cargar_json ()
        {
            let dataSenateHTML='';
            let dataSenateTotal='';
            let dataSenateStat='';

            let sumaD=0;
            let sumaR=0;
            let sumaI=0;

            let contadorD = 0;
            let contadorR = 0;
            let contadorI = 0;

            let promedioD = 0;
            let promedioR = 0;
            let promedioI = 0;

            $.getJSON('senate.json', function (dataSenate){
                dataSenateTotal=dataSenate.results[0].members.length;
                

            for (i=0;i<dataSenate.results[0].members.length;i++){
                if(dataSenate.results[0].members[i].party=="D"){
                    sumaD = sumaD+dataSenate.results[0].members[i].votes_with_party_pct;
                    contadorD++;
                }
                else if(dataSenate.results[0].members[i].party=="R"){
                    sumaR = sumaR+dataSenate.results[0].members[i].votes_with_party_pct;
                    contadorR++;
                }
                else {
                    sumaI = sumaI+dataSenate.results[0].members[i].votes_with_party_pct;
                    contadorI++;
                }
                
                                
                dataSenateHTML += '<tr>';
                if(dataSenate.results[0].members[i].middle_name!=null){
                    dataSenateHTML += '<td>' + '<a href='+dataSenate.results[0].members[i].url +' target="_blank">'+ dataSenate.results[0].members[i].first_name+" "+dataSenate.results[0].members[i].middle_name+
                    " "+dataSenate.results[0].members[i].last_name+'</a></td>';
                }
                else{
                    dataSenateHTML += '<td>' + '<a href='+dataSenate.results[0].members[i].url +' target="_blank">'+ dataSenate.results[0].members[i].first_name+" "+dataSenate.results[0].members[i].last_name;'</a></td>';
                }
                
                dataSenateHTML += '<td>' + dataSenate.results[0].members[i].party;'</td>';
                dataSenateHTML += '<td>' + dataSenate.results[0].members[i].state;'</td>';
                dataSenateHTML += '<td>' + dataSenate.results[0].members[i].seniority;'</td>';
                dataSenateHTML += '<td>' + dataSenate.results[0].members[i].votes_with_party_pct;'</td>';
                dataSenateHTML += '</tr>';
            }

                promedioD = sumaD/contadorD;
                promedioR = sumaR/contadorR;
                promedioI = sumaI/contadorI;
                    
                dataSenateStat +='<tr>';
                dataSenateStat +='<th>'+ 'Democrat Party';'</th>';
                dataSenateStat +='<td>'+  contadorD;'</td>';
                dataSenateStat +='<td>'+  promedioD.toFixed(2);'</td>';
                dataSenateStat +='</tr>';
                
                dataSenateStat +='<tr>';
                dataSenateStat +='<th>'+ 'Republican Party';'</th>';
                dataSenateStat +='<td>'+  contadorR;'</td>';
                dataSenateStat +='<td>'+  promedioR.toFixed(2);'</td>';
                dataSenateStat +='</tr>';
                
                dataSenateStat +='<tr>';
                dataSenateStat +='<th>'+ 'Independent Party';'</th>';
                dataSenateStat +='<td>'+  contadorI;'</td>';
                dataSenateStat +='<td>'+  promedioI.toFixed(2);'</td>';
                dataSenateStat +='</tr>';

            $('#'+'senateId').html(dataSenateHTML);
            $('#'+'membersSenateId').html(dataSenateTotal);
            $('#'+'statSenateId').html(dataSenateStat)
            })

        }
    }
)




