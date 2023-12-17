import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiCommonService } from 'src/Services/api-common.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit, AfterViewInit {

  public dataFromApi?: any;
  public savingPlanProgressWidth: any[] = [];
  public savingPlanData: any[] = [
    { title: 'New Watch', target: 2000, total: 1000, icon: 'far fa-clock' },
    { title: 'Play Station 5', target: 2000, total: 500, icon: 'fab fa-playstation' },
    { title: 'New Car', target: 20000, total: 15000, icon: 'fas fa-car' },
  ];

  public transactionTableHeaders = ['Date', 'Name', 'Status', 'Type', 'Time', 'Amount', 'Action'];
  modalOpen: boolean = false;
  searchdata: any = '';
  transactionName: any;
  transactionType: any;
  transactionHistoryData: any[] = [];

  // ---Get API Data from Services----
  private getServiceData() {
    this.serviceApi.getApiData().subscribe(res => {
      this.dataFromApi = res;
      for (let i = 0; i < 5; i++) {
        this.transactionHistoryData.push(res.transactions[i]);
      }
      console.log(this.transactionHistoryData);
    });

  }

  // -----------saving plan progress bar----------
  private getSavingPlanData() {
    this.savingPlanData.forEach((res: any) => {
      this.savingPlanProgressWidth.push(
        res.total / res.target * 100
      );
    });
  }


  // ----total balance getter-----------
  public get getTotalBalance() {
    return this.dataFromApi.balance;
  }


  // ----money statistics getter-----------
  public get getMoneyStat() {
    return this.dataFromApi.money_statistics;
  }

  openPopUp(data: any) {
    this.modalOpen = true;
    this.transactionName = data.name;
    this.transactionType = data.type;
  }

  // ----------Search data from transactions history-------
  search(value: any) {
    if (value != '') {
      let searchValue = value.toLowerCase();
      this.transactionHistoryData = this.transactionHistoryData.filter(x => {
        return x.name.toLowerCase().includes(searchValue) || x.status.toLowerCase().includes(searchValue) || x.type.toLowerCase().includes(searchValue);
      });
    }
    else {
      this.transactionHistoryData = this.transactionHistoryData;
      // return;
    }
  }

  // -----graph element-----------
  @ViewChild('statisticsGraph', { read: ElementRef<HTMLCanvasElement> }) graphData?: ElementRef<HTMLCanvasElement>;


  constructor(private serviceApi: ApiCommonService) {
    this.getSavingPlanData();
    this.getServiceData();
  }

  ngOnInit() { }

  graphDataList = [
    { year: 'Jan', count1: 40, count2: 10, count3: 30 },
    { year: 'Feb', count1: 35, count2: 7, count3: 30 },
    { year: 'Mar', count1: 47, count2: 10, count3: 35 },
    { year: 'Apr', count1: 47, count2: 15, count3: 30 },
    { year: 'May', count1: 30, count2: 7, count3: 25 },
    { year: 'Jun', count1: 35, count2: 7, count3: 18 },
    { year: 'Jul', count1: 50, count2: 13, count3: 20 },
    { year: 'Aug', count1: 43, count2: 7, count3: 28 },
    { year: 'Sep', count1: 36, count2: 15, count3: 20 },
    { year: 'Oct', count1: 32, count2: 7, count3: 28 },
    { year: 'Nov', count1: 47, count2: 12, count3: 28 },
    { year: 'Dec', count1: 40, count2: 15, count3: 20 },

  ];

  ngAfterViewInit() {
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 10;
    Chart.defaults.font.weight = '500';

    new Chart(
      this.graphData?.nativeElement.getContext('2d')!,
      {
        type: 'bar',
        data: {
          labels: this.graphDataList.map(row => row.year),
          datasets: [
            {
              label: 'Income',
              data: this.graphDataList.map(row => row.count1),
              backgroundColor: '#92a9a7',
              borderRadius: 10,
              categoryPercentage: 0.4,
              barPercentage: 0.6
            },
            {
              label: 'Investment',
              data: this.graphDataList.map(row => row.count2),
              backgroundColor: '#8284b1',
              borderRadius: 10,
              categoryPercentage: 0.4,
              barPercentage: 0.6
            },
            {
              label: 'Expense',
              data: this.graphDataList.map(row => row.count3),
              backgroundColor: '#575c8f',
              borderRadius: 10,
              categoryPercentage: 0.4,
              barPercentage: 0.6
            },
          ]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              labels: {
                boxWidth: 5,
                boxHeight: 5,
                usePointStyle: true,
                pointStyle: 'circle',
                boxPadding: 10,
                padding: 20,
                color: '#090832',
                font: {
                  size: 11,
                  weight: '600',
                },
              }
            }
          },
          scales: {
            y: {
              min: 0,
              max: 60
            }
          },
        }
      }
    );

  }




}
