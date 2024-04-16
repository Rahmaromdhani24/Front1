import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDigitalService } from 'src/app/Services/Admin Digital/admin-digital.service';
import * as echarts from 'echarts';
import * as $ from 'jquery';


@Component({
  selector: 'app-home-admin-digital',
  templateUrl: './home-admin-digital.component.html',
  styleUrls: ['./home-admin-digital.component.css']
})
export class HomeAdminDigitalComponent implements OnInit {

  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";
  imagePath : string="";
  patientToDaycount:number = 0;

  public constructor(private service : AdminDigitalService , private router : Router , private route : ActivatedRoute) { }
  ngOnInit() {
    /**** chart patients ****/
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom, 'light');
    var option;
    option = {
      backgroundColor:'rgb(255, 255, 255)',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['Patients', 'Age Patients']
      },
      toolbox: {
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            'Jan',
            'Fiv',
            'Mar',
            'Avr',
            'Mai',
            'Juin',
            'Juil',
            'Aout',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Patients',
          type: 'line',
          color:'	#6495ED',
         // stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [10,20, 12,23,25,89,87,96,66,33,66,12],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
        },
        {
          name: 'Age Patients',
          type: 'line',
          color:'rgb(255, 150, 150)',
         // stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [10,20, 12,23,25,89,87,96,66,33,66,12]
        }
      ]
    };
    
    option && myChart.setOption(option);
     /**** chart performance medecins  ****/
    var chartDom = document.getElementById('main2');
    var myChart = echarts.init(chartDom, 'light');
    var option;
    
    const colors = ['#F4A460', '#B0C4DE', '#48D1CC', '#EE6666'];
    option = {
      backgroundColor:'rgb(255, 255, 255)',
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '10%',
        height:'70%'
      },
      toolbox: {
        feature: {
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Médecins', 'Secrétaires', 'Homme', 'Femme']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: ' Femme',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[3]
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        },
        {
          type: 'value',
          name: 'non-Expert',
          //position: 'right',
          alignTicks: false,
          offset: 90,
          axisLine: {
            show: false,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        },
        {
          type: 'value',
          name: 'Homme',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {}
        },
    
        {
         // type: 'value',
        //  name: 'Femme',
         // position: 'left',
          alignTicks: true,
          offset: 500,
          axisLine: {
            //show: false,
            lineStyle: {
             // color: colors[3]
            }
          },
          //axisLabel: {}
        }
      ],
      series: [
        {
          name: 'Médecins',
          type: 'bar',
         
 data: [12,12,14,15,16,18,80,17,15,10,11,12]
        },
        {
          name: 'Secrétaires',
          type: 'bar',
          yAxisIndex: 1,
          data: [ 12,12,14,15,16,18,80,95,15,10,11,12]
        },
        {
          name: 'Homme',
          type: 'line',
          yAxisIndex: 2,
          data: [12,12,14,15,16,91,80,17,15,10,11,12]
        },
        {
          name: 'Femme',
          type: 'line',
          yAxisIndex: 3,
          data: [12,12,14,15,16,18,80,17,15,93,11,12]
        }
      ]
    };
    
    option && myChart.setOption(option);
    /************************************************************************************/
    this.getNumPatientsToDay();
    /************************************************************************/
    this.service.getAdminDigital(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = this.admin.nom+" "+this.admin.prenom; 
    if(this.admin.image ==null){
      this.imagePath="./assets/icons/user1.png"
    }
    else{
      this.imagePath="http://localhost:8281/adminDigital/getImageProfileAdminDigial/"+this.admin.id ; }

      this.service.getAllMedecins().subscribe(data => {
        this.service.MedecinData =  data;
        this.service.testTabMedecins = this.service.MedecinData.length;
        console.log("les mdecins sont :"+this.service.MedecinData) ; 
  });
  });
  }
  
  getNumPatientsToDay(){

    this.service.getAllPatientsByDateInscription().subscribe(data=>{
    this.patientToDaycount =data;
    $({ countNum: $('.patient').html() }).animate({ countNum: this.patientToDaycount }, {
      duration: 500,
      easing: 'linear',
      step: function () {
      $('.patient').html(Math.floor(+this.countNum) + "");
  },
  complete: function () {
      $('.patient').html(this.countNum + "");
      //alert('finished');
  }
  });
  })
  }
logout() {
  localStorage.clear();
  this.router.navigateByUrl('/accueil');
}
}  