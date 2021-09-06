import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Text Editer',
    children: [
      {name: 'Cusrsor'},
      {name: 'find'},
      {name: 'Front'},
      {name: 'Fromatting'},
      {name: 'Diff Editer'},
      {name: 'Minimap'},
      {name: 'Suggestion'},
      {name: 'Filles'},
    ]
  }, 
  {
    name: 'Window',
    children: [
      {name: 'New Widow'},
    ]
  }, {
    name: 'Features',
    children: [
      {name: 'Explorer'},
      {name: 'Search'},
      {name: 'Debug'},
      {name: 'SCM'},
      {name: 'EXtensions'},
      {name: 'Terminnal'},      
    ]
  }, {
    name: 'Appication',
    children: [
      {name: 'Proxy'},
      {name: 'Keyboard'},
      {name: 'Update'},
    ]
  }, {
    name: 'Extensions',
    children: [
      {name: 'CSS'},
      {name: 'GitHub'},
      {name: 'Git'},
      {name: ''},
    ]
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.css']
})
export class UsersettingComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
    ngOnInit(): void {}

}
