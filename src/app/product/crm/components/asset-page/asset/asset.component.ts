import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {
      title: 'Name',
      name: 'name',
      sort: 'asc'
    },
    {
      title: 'Title',
      name: 'title',
      sort: 'asc'
    },
    {
      title: 'Comapny',
      name: 'comapny',
      sort: 'asc'
    },
    {
      title: 'Phone',
      name: 'phone',
      sort: 'asc'
    },
    { title: 'Mobile', name: 'mobile', sort: 'asc' },
    { title: 'Email', name: 'email', sort: 'asc' },
    { title: 'Lead Status', name: 'leadStatus', sort: 'asc' },
    { title: 'Owner', name: 'owner', sort: 'asc' }
  ];
  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = [
    {
      name: 'Nikhith',
      title: 'Software Enginerr',
      comapny: 'Mantralabs',
      phone: '9273456784',
      mobile: '08023447597',
      email: 'nikhith@gmail.com',
      leadStatus: 'progress',
      owner: 'Umesh KJ'
    },
    {
      name: 'Umesh',
      title: 'Software Enginerr',
      comapny: 'Mantralabs',
      phone: '9273456784',
      mobile: '08023447597',
      email: 'nikhith@gmail.com',
      leadStatus: 'progress',
      owner: 'Umesh KJ'
    },
    {
      name: 'Harish',
      title: 'Software Enginerr',
      comapny: 'Mantralabs',
      phone: '9273456784',
      mobile: '08023447597',
      email: 'nikhith@gmail.com',
      leadStatus: 'progress',
      owner: 'Umesh KJ'
    }
  ];

  constructor(private modalService: NgbModal) {
    this.length = this.data.length;
  }

  ngOnInit() {
    this.onChangeTable(this.config);
  }
  open(content) {
    console.log('clicked');
    this.modalService.open(content, { size: 'lg' }).result.then(
      result => {
        console.log(`Closed with: ${result}`);
      },
      reason => {
        // console.log(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end =
      page.itemsPerPage > -1 ? start + page.itemsPerPage : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(
          this.config.filtering.filterString
        )
      );
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (
          item[column.name].toString().match(this.config.filtering.filterString)
        ) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(
    config: any,
    page: any = { page: this.page, itemsPerPage: this.itemsPerPage }
  ): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows =
      page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}

