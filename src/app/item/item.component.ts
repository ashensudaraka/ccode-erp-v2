import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {

  @ViewChild('myForm1', { static: false }) myForm1: NgForm;
  @ViewChild('myForm2', { static: false }) myForm2: NgForm;

  displayedColumns: string[] = ['itemCode', 'itemName', 'description'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchItemCode: string = '';
  searchItemName: string = '';
  searchItemType: string = '';

  itemCode: string = '';
  itemName: string = '';
  itemType: string = '';
  description: string = '';
  buyPrice: string = '';
  sellPrice: string = '';
  uom: string = '';
  barCode: string = '';

  addItemName: string = '';
  addItemType: string = '';
  addDescription: string = '';
  addBuyPrice: string = '';
  addSellPrice: string = '';
  addUom: string = '';
  addBarCode: string = '';

  updateItemCode: string = '';
  updateItemName: string = '';
  updateItemType: string = '';
  updateDescription: string = '';
  updateBuyPrice: string = '';
  updateSellPrice: string = '';
  updateUom: string = '';
  updateBarCode: string = '';

  displayItemArea: boolean = true;
  addItemArea: boolean = false;
  updateItemArea: boolean = false;

  itemArray: any = [];
  dataSource = new MatTableDataSource(this.itemArray);

  constructor(private dataService: ItemService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  //Displaying add item inputs
  displayAddItem() {
    this.displayItemArea = false;
    this.updateItemArea = false;
    this.addItemArea = true;
  }

  //Closing add item inputs
  cancelAddItem() {
    this.addItemArea = false;
    this.displayItemArea = true;
    this.myForm1.resetForm();
  }

  //Closing update item inputs
  cancelUpdateItem() {
    this.updateItemArea = false;
    this.displayItemArea = true;
    this.myForm2.resetForm();
  }

  //Getting all item details for table
  getTableData() {
    this.itemArray.length = 0;
    this.dataService.getAllItemDetails()
      .subscribe(results => {
        console.log(results);
        let status = results['status'];
        if (status == 200) {
          this.itemArray = JSON.parse(results['_body']);
          //Select first table row
          // this.setRowData(this.itemArray[0]);
          console.log(this.itemArray);
          //this.itemArray.paginator = this.paginator;
        }
        else if (status == 401) {
          alert("Unauthorized");
        }
        else if (status == 403) {
          alert("Forbidden");
        }
        else if (status == 404) {
          alert("Not Found");
        }

      });
  }

  addItem(form1: NgForm) {
    if (form1.valid) {
      console.log("rrr")
    }
  }

  clearSearchFieldItemCode() {
    this.searchItemCode = '';
  }

  clearSearchFieldItemName() {
    this.searchItemName = '';
  }

  clearSearchFieldItemType() {
    this.searchItemType = '';
  }

}
