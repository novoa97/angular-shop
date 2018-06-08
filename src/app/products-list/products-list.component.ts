import { Component, OnInit, ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { product } from '../product'
import { client } from '../client'
import { OfferdProducts } from '../offered_products'
import { modalcontent } from '../modalcontent/modalcontent.component'

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @ViewChild("modalcontent", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  products: product[] = OfferdProducts
  client: client = { id: 1, name: "Jaime", email: "jaime@example.com", pass: "123456"}
  email: string
  password: string
  login: boolean

  constructor( private resolver: ComponentFactoryResolver ) { }

  ngOnInit() {

  }
  buy(){
    this.createComponent('login')
    this.login = false
  }
  validate(){
      this.login = true
      this.createComponent('card')
    }
  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(modalcontent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }
}
