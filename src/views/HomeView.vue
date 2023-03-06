<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* { box-sizing: border-box; }

:root {
  --app-bg: #101827;
  --sidebar: rgba(21, 30, 47,1);
  --sidebar-main-color: #fff;
  --table-border: #1a2131;
  --table-header: #1a2131;
  --app-content-main-color: #fff;
  --sidebar-link: #fff;
  --sidebar-active-link: #1d283c;
  --sidebar-hover-link: #1a2539;
  --action-color: #2869ff;
  --action-color-hover: #6291fd;
  --app-content-secondary-color: #1d283c;
  --filter-reset: #2c394f;
  --filter-shadow: rgba(16, 24, 39, 0.8) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.light:root {
  --app-bg: #fff;
  --sidebar: #f3f6fd;
  --app-content-secondary-color: #f3f6fd;
  --app-content-main-color: #1f1c2e;
  --sidebar-link: #1f1c2e;
  --sidebar-hover-link: rgba(195, 207, 244, 0.5);
  --sidebar-active-link: rgba(195, 207, 244, 1);
  --sidebar-main-color: #1f1c2e;
  --filter-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

$font-small: 14px;
$font-medium: 16px;
$font-large: 24px;

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background-color: var(--app-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 1280px;
  display: flex;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width: 2000px;
  margin: 0 auto;
}

.sidebar {
  flex-basis: 200px;
  max-width: 200px;
  flex-shrink: 0;
  background-color: var(--sidebar);
  display: flex;
  flex-direction: column;
  
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }
  
  &-list {
    list-style-type: none;
    padding: 0;
    
    &-item {
      position: relative;
      margin-bottom: 4px;
      
      a {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 16px;
        color: var(--sidebar-link);
        text-decoration: none;
        font-size: $font-small;
        line-height: 24px;
      }
      
      svg { margin-right: 8px; }
      
      &:hover { background-color: var(--sidebar-hover-link); }
      
      &.active {
        background-color: var(--sidebar-active-link);
        
        &:before {
          content: '';
          position: absolute;
          right: 0;
          background-color: var(--action-color);
          height: 100%;
          width: 4px;
        }
      }
    }
  }
  
  @media screen and (max-width: 1024px) {&{
      display: none;
  }}
}

.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--app-content-main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 8px;
  cursor: pointer;
  
  .moon {
    fill: var(--app-content-main-color);
  }
}

.mode-switch.active .moon {
  fill: none;
}

.account-info {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-top: auto;
  
  &-picture {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &-name {
    font-size: $font-small;
    color: var(--sidebar-main-color);
    margin: 0 8px;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &-more {
    color: var(--sidebar-main-color);
    padding: 0;
    border: none;
    background-color: transparent;
    margin-left: auto;
  }
}

.app-icon {
  color: var(--sidebar-main-color);
  
  svg {
    width: 24px;
    height: 24px;
  }
}

.app-content {
  padding: 16px;
  background-color: var(--app-bg);
  height: 100%;
  flex: 1;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  
  &-headerText {
    color: var(--app-content-main-color);
    font-size: $font-large;
    line-height: 32px;
    margin: 0;
  }
  
  &-headerButton {
    background-color: var(--action-color);
    color: #fff;
    font-size: $font-small;
    line-height: 24px;
    border: none;
    border-radius: 4px;
    height: 32px;
    padding: 0 16px;
    transition: .2s;
    cursor: pointer;
    
    &:hover {
      background-color: var(--action-color-hover);
    }
  }
  
  &-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 4px;
    
    &-wrapper {
      display: flex;
      align-items: center;
      margin-left: auto;
    }
    
    @media screen and (max-width: 520px) {&{
      flex-direction: column;
      
      .search-bar { max-width: 100%; order: 2; }
      .app-content-actions-wrapper { padding-bottom: 16px; order: 1; }
    }}
  }
}

@mixin searchIcon($color) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23#{$color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
}

.action-button {
  border-radius: 4px;
  height: 32px;
  background-color: var(--app-content-secondary-color);
  border: 1px solid var(--app-content-secondary-color);
  display: flex;
  align-items: center;
  color: var(--app-content-main-color);
  font-size: $font-small;
  margin-left: 8px;
  cursor: pointer;
  
  span { margin-right: 4px; }
  
   &:hover {
    border-color: var(--action-color-hover);
  }
  
  &:focus, &.active {
    outline: none;
    color: var(--action-color);
    border-color: var(--action-color);
  }
}

.filter-button-wrapper {
  position: relative;
}

@mixin arrowDown($color) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23#{$color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
}

.filter-menu {
   background-color: var(--app-content-secondary-color);
  position: absolute;
  top: calc(100% + 16px);
  right: -74px;
  border-radius: 4px;
  padding: 8px;
  width: 220px;
  z-index: 2;
  box-shadow: var(--filter-shadow);
  
  visibility: hidden;
  opacity: 0;
  transition: .2s;
  
  &:before {
    content: '';
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-bottom: 5px solid var(--app-content-secondary-color);
    bottom: 100%;
    left: 50%;
    transform: translatex(-50%);
  }
  
  &.active {
    visibility: visible;
    opacity: 1;
    top: calc(100% + 8px);
  }
  
  label {
    display: block;
    font-size: $font-small;
    color: var(--app-content-main-color);
    margin-bottom: 8px;
  }
  
  select {
    appearance: none;
    @include arrowDown('fff');
    background-repeat: no-repeat;
    padding: 8px 24px 8px 8px;
    background-position: right 4px center;
    border: 1px solid var(--app-content-main-color);
    border-radius: 4px;
    color: var(--app-content-main-color);
    font-size: 12px;
    background-color: transparent;
    margin-bottom: 16px;
    width: 100%;
    option { font-size: 14px; }
    
    .light & {
      @include arrowDown('1f1c2e');
    }
    
    &:hover {
      border-color: var(--action-color-hover);
    }

    &:focus, &.active {
      outline: none;
      color: var(--action-color);
      border-color: var(--action-color);
      @include arrowDown('2869ff');
    }
  }
}

.filter-menu-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-button {
  border-radius: 2px;
  font-size: 12px;
  padding: 4px 8px;
  cursor: pointer;
  border: none;
  color: #fff;
  
  &.apply {
    background-color: var(--action-color);
  }
  
  &.reset {
    background-color: var(--filter-reset);
  }
}

.products-area-wrapper {
  width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 0 4px;
}

.products-header-a {
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: var(--app-content-secondary-color);
    position: sticky;
    top: 0;
  }

.tableView {
  .products-header {
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: var(--app-content-secondary-color);
    position: sticky;
    top: 0;
  }
  
  .products-row {
    display: flex;
    align-items: center;
    border-radius: 4px;
    
    &:hover {
      box-shadow: var(--filter-shadow);
      background-color: var(--app-content-secondary-color);
    }
    
    .cell-more-button {
      display: none;
    }
  }
  
  .product-cell {
    flex: 1;
    padding: 8px 16px;
    color: var(--app-content-main-color);
    font-size: $font-small;
    display: flex;
    align-items: center;
        
    img {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      margin-right: 6px;
    }
    
    @media screen and (max-width: 780px) {&{
      font-size: 12px;
      &.image span { display: none; }
      &.image { flex: 0.2; }
    }}
      
    @media screen and (max-width: 520px) {&{      
      &.category, &.sales {
        display: none;
      }
      &.status-cell { flex: 0.4; }
      &.stock, &.price { flex: 0.2; }
    }}
    
    @media screen and (max-width: 480px) {&{
      &.stock { display: none; }
      &.price { flex: 0.4; }
    }}
  }
  
  .sort-button {
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--app-content-main-color);
    margin-left: 4px;
    display: flex;
    align-items: center;
    
    &:hover { color: var(--action-color); }
    svg { width: 12px; }
  }
  
  .cell-label {
    display: none;
  }
}

.gridView {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  
  @media screen and (max-width: 520px) {&{
    margin: 0;
  }}
  
  .products-header {
    display: none;
  }
  
  .products-row {
    margin: 8px;
    width: calc(25% - 16px);
    background-color: var(--app-content-secondary-color);
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: transform .2s;
    position: relative;
    
    &:hover {
      transform: scale(1.01);
      box-shadow: var(--filter-shadow);
      
      .cell-more-button {
        display: flex;
      }
    }
    
    @media screen and (max-width: 1024px) {&{
      width: calc(33.3% - 16px);
    }}
    
    @media screen and (max-width: 820px) {&{
      width: calc(50% - 16px);
    }}
    
    @media screen and (max-width: 520px) {&{
      width: 100%;
      margin: 8px 0;
      
      &:hover {
        transform: none;
      }
    }}
    
    .cell-more-button {
      border: none;
      padding: 0;
      border-radius: 4px;
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width:24px;
      height: 24px;
      background-color: rgba(16, 24, 39, 0.7);
      color: #fff;
      cursor: pointer;
      display: none;
    }
  }
  
  .product-cell {
    color: var(--app-content-main-color);
    font-size: $font-small;
    margin-bottom: 8px;
    
    &:not(.image) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    &.image  span {
      font-size: 18px;
      line-height: 24px;
    }

    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 16px;
    }
  }
  
  .cell-label { opacity: 0.6; }
}

body {
  background-color: #1d283c;
  overflow: initial;
}

.cell-table{
    flex: 1;
    padding: 8px 16px;
    color: var(--app-content-main-color);
    font-size: 14px;
    text-align: center;
    font-weight: 400;
}

.header-table{
  background-color: #1d283c;
  align-items: center;
  
}

tr{
  border-style: hidden !important;
}

.content-table{
  flex: 1;
  padding: 8px 16px;
  color: var(--app-content-main-color);
  font-size: 14px;
  text-align: center;
  border-bottom-width: 0px !important;
  font-weight: 300;

  &.number {
    text-align: right !important;
  }
}

.content-sub-table{
  flex: 1;
  color: var(--app-content-main-color);
  font-size: 14px;
  text-align: center;
  border-bottom-width: 0px !important;
  font-weight: 300;

  &.number {
    text-align: right !important;
  }
}

.status {
  border-radius: 4px;
  align-items: center;
  padding: 4px 8px;
  font-size: 12px;
  border-bottom-width: 0px;
  display: inline-flex;
  
  &:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 4px;
  }
  
  &.active {
   color: #32ff00;
  background-color: #34ff073d;

    &:before {
      background-color: #2ba972;
    }
  }

  &.inactive {
    color: #ffa200;
   background-color: #ffc1073d;
    
    &:before {
      background-color: #ff0000;
    }
  }
}

img {
  width: 70px;
  height: 70px;
  border-radius: 6px;
  margin-right: 6px;
}
    
.list-enter-active,
.list-leave-active {
  transition: all .5s ease-in-out;
}

.list-enter-from{
  transform: scaleY(0);
  transform-origin: left top;
  flex-direction: column;
  
}

.list-enter,
.list-leave-to {
  transform: scaleY(0);
  transform-origin: left top;
  flex-grow:0 !important;
}

.color{
  color: red;
}

.green{
  color: green;
}

</style>
<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <meta name="mobile-web-app-capable" content="yes">
  <div style="background-color: #101827;top: 0; left: 0;">
    <div class="row">
      <div class="col-12">
        <input class="form-control" type="text" v-model="search" placeholder="Buscar">
      </div>
    </div>
    <table class="table" style="width: 98%; margin-left: 1rem; margin-right: 63rem;border-radius: 1em; overflow: hidden;">
      <thead class="header-table">
        <tr>
            <th scope="col" style="width: 76px" class="cell-table">Id Venta</th>
            <th scope="col" class="cell-table">Producto</th>
            <th scope="col" style="text-align: left;" class="cell-table">Cantidad</th>
            <th scope="col" style="text-align: left;" class="cell-table">Check</th>
            <th scope="col" class="cell-table">Acción</th>
            <th scope="col" class="cell-table">Estado</th>
        </tr>
      </thead>
      <tbody id="tbody_sale">
        <template v-for="(item) in sales">
          <tr v-if="`${item.id} ${item.state} ${item.productos[0].product_model} ${item.productos[0].product_id} ${item.state} ${item.action}`.search(new RegExp(search, 'i')) >= 0 || search == ''">
            <td class="content-table" data-microtip-position="right" role="tooltip" :aria-label="item.fecha_carga"><span v-bind:class="[(item.completed_at == '-' ? 'green' : 'color')]" class="material-symbols-outlined">{{item.icon_sale}}</span> <b><a :href="'https://btcmarket.hiboutik.com/?ca='+item.id " target="_blank">{{item.id}}</a></b><br> <p style="font-size: 10px;">{{ item.fecha_carga}}</p></td>
            <td class="content-table" style="text-align:left;">
              <div style="font-size: small" class="images" v-viewer="{toolbar: false, navbar: false, title: false}">
                <img :src="item.productos[0].url_image" />
                {{item.productos[0].product_model}}
              </div>
              
            </td>
            <td class="content-table">{{item.productos[0].quantity}}</td>
            <td class="content-table" v-if="item.state != 'cargado' || item.state == 'eliminado'"><input style="padding: 0px" class="form-check-input" @click="update_checked($event)" type="checkbox" v-bind:aria-label="item.id" v-model="item.productos[0].loaded" id="0"></td>
            <td class="content-table" v-else></td>
            <td class="content-table" v-if="item.state == 'no_cargado'">Delivery <span v-bind:class="[(item.fecha_programado == '-' ? '' : 'color')]"  v-show="item.fecha_programado == '-' ? '' : 'color'" class="material-symbols-outlined">alarm</span><br> <p style="font-size: 10px;">{{ item.fecha_programado}}</p></td>
            <td class="content-table" v-else-if="item.action == 'retiro_tienda'">Retiro en tienda</td>
            <td class="content-table" v-else-if="item.action == 'envio'">Preparar envio</td>
            <td class="content-table" style="color: #ffb81c" v-else-if="item.action == 'send_chilexpress'">Chilexpress</td>
            <td class="content-table" v-else-if="item.state == 'cambio_tienda'">Cambio de tienda</td>
            <td class="content-table" v-else-if="item.state == 'cargado' && item.programed_ready == true && item.fecha_programado != '-'">Delivery <span v-show="item.fecha_programado == '-' ? '' : 'color'" class="material-symbols-outlined">alarm</span><br> <p style="font-size: 10px;">{{ item.fecha_programado}}</p></td>
            <td class="content-table" v-else-if="item.state == 'cargado' && item.fecha_programado != '-'">Programado <br> <p style="font-size: 10px;">{{ item.fecha_programado}}</p></td>
            <td class="content-table" v-else-if="item.state == 'programado'">Programado <br> <p style="font-size: 10px;">{{ item.fecha_programado}}</p></td>
            <td class="content-table" v-else-if="item.state == 'cargado'"></td>
            <td class="content-table" v-else-if="item.state == 'eliminado'">Retirar</td>

            <td class="content-table"  v-if="item.state != 'cargado' || item.state == 'eliminado'"> <button v-bind:id="item.class_sale" :disabled="item.button ? false : ''" v-on:click="update_status_order($event)" class="status inactive ">Cargar</button> </td>
            <td class="content-table"  v-else><span class="status active">Listo</span></td>
          </tr>
          <template v-for="(item2, index2) in item.productos.slice(1)">
            <tr :key="index2" v-if="`${item.id} ${item2.product_model}`.search(new RegExp(search, 'i')) >= 0 || search == ''">
              <td></td>
                  <td rowspan="1" class="content-sub-table" style="text-align:left; padding-bottom: 11px; width: 43%;">
                    <div class="images" style="font-size: small" v-viewer="{toolbar: false, navbar: false, title: false}">
                      <img :src="item2.url_image" />
                      {{item2.product_model}}
                    </div>
                  </td>
                  <td class="content-sub-table" style=""> {{ item2.quantity}} </td>
                  <td class="content-sub-table" style="" v-if="item.state != 'cargado' || item.state == 'eliminado'"> <input class="form-check-input" @click="update_checked($event)" type="checkbox" v-bind:aria-label="item.id"  v-model="item2.loaded" v-bind:id="[index2 == 0 ? 1 : index2 + 1]"> </td>
                  <td class="content-sub-table" v-else></td>
            </tr>
          </template>       
        </template>
      </tbody>
    </table>
  </div>
  </template>
<script>
import SaleDataService from '../services/SaleDataService';
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import axios from 'axios';
import dayjs from 'dayjs' 

export default {
  name: 'HomeView',
  data(){
    return{
      sales: [],
      currentSale: null,
      currentIndex: -1,
      search: '',
    };
  },
  components : {
    Viewer,
  },
  methods: {
    onDataChange(items) {
      let _sales      = [];
      let date        = new Date();
      let day         = date.getDate();

      if(day <= 9){
        day = '0' + day;
      }

      let dayMonth = day + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
      items.forEach(item => {
        let key = item.key;
        let aux = item.val();
        let fullDate = aux.data_loader.date_loader;
        let date = fullDate.split(' ')[0];         

            let sale = item.val();
            let line_items = sale.data_hiboutik.line_items;
            let comment_hb = '';
            let status = '';
            let date_load = '';
            let disable = false;
            let datetime = '';
            let programed_ready = false;

            if(sale.data_hiboutik.comments != "" && sale.data_hiboutik.comments != null && sale.data_hiboutik.comments != undefined){
              comment_hb = sale.data_hiboutik.comments == "" ? '-': sale.data_hiboutik.comments;
            }

            
            if(sale.data_hiboutik.comments != "" && sale.data_hiboutik.comments != null && sale.data_hiboutik.comments != undefined){
              comment_hb = sale.data_hiboutik.comments == "" ? '-': sale.data_hiboutik.comments;
            }

            if(sale.data_loader.status_load != "" && sale.data_loader.status_load != null && sale.data_loader.status_load != undefined){
              status = sale.data_loader.status_load == "" ? '-' : sale.data_loader.status_load; 
            }else{
              status = '-';
            }

            if(sale.data_loader.date_loader != "" && sale.data_loader.date_loader != null && sale.data_loader.date_loader != undefined){
              date_load = sale.data_loader.date_loader == "" ? '-' : sale.data_loader.date_loader;
            
            }else{
              date_load = '00-00-0000 00:00:00';
            }

            let pickup_date = sale.data_hiboutik.pickup_date == "0000-00-00 00:00:00" ? '-' : sale.data_hiboutik.pickup_date;
            if(pickup_date != '-'){
              let pickup_date_date = pickup_date.split(' ')[0];
              let pickup_date_parse = pickup_date_date.split('-');
              pickup_date = pickup_date_parse[2] + '-' + pickup_date_parse[1] + '-' + pickup_date_parse[0] + ' ' + pickup_date.split(' ')[1];
            }
            console.log(item.key);
            for(let i=0; i < line_items.length; i++){
                let product_id = line_items[i].product_id;
                let product_name = line_items[i].product_model;
                line_items[i]['product_model'] = product_name.charAt(0).toUpperCase() + product_name.slice(1).toLowerCase();
                line_items[i]['url_image'] = 'https://btcmarket.hiboutik.com/images/products/big_'+product_id+'-1.jpg';
                line_items[i]['loader'] == 'false' ? line_items[i]['loader'] = false : line_items[i]['loader'] = true;

            }

            let filtered = line_items.filter(function(element){

              return element.loaded == 'false';
            });


            if(filtered.length > 0){
              disable = false;
            }else{
              disable = true;
            }
            
            if(pickup_date != '-' && status == 'cargado'){
              let aux = sale.data_hiboutik.pickup_date;
              let aux2 = dayjs(aux).format('YYYY-MM-DD HH:mm:ss');
              let aux3 = dayjs().format('YYYY-MM-DD HH:mm:ss');

              dayjs(aux2).isBefore(aux3) ? programed_ready = true : programed_ready = false;
            }

            let completed_at = sale.data_hiboutik.completed_at;
            let icon = '';
            if(completed_at == '0000-00-00 00:00:00'){
              completed_at = '-';
              icon = 'lock_open';
            }else{
              icon = 'lock';
            }

            let customers_phone = sale.data_hiboutik.customers_phone;
            if(customers_phone == '' || customers_phone == null || customers_phone == undefined){
              customers_phone = '-';
            }
            
            /*
            if(pickup_date != '-' && status == 'cargado'){
              datetime = new Date(Date.now()).toLocaleString('es-CL',{timeZone: "America/Santiago", day:'numeric',month:'numeric',year:'numeric', hour:'numeric', minute:'numeric', second:'numeric'});
              let datetime_date = datetime.split(', ')[0].toString();
              let datetime_time = datetime.split(', ')[1].toString();
              let pickup_date_date = pickup_date.split(' ')[0].toString();
              let pickup_time = pickup_date.split(' ')[1].toString();

              if(datetime_date < pickup_date_date){
                programed_ready = true;
                if(datetime_time < pickup_time){
                  programed_ready = true;
                }
              }
            } */

            _sales.push({
              id: key,
              action: sale.data_hiboutik.action,
              productos: line_items,
              state: status,
              fecha_carga: date_load,
              fecha_programado: pickup_date,
              button: disable,
              date: datetime,
              programed_ready: programed_ready,
              class_sale: key+'-'+status,
              completed_at : completed_at,
              icon_sale: icon,
              customers_phone: customers_phone,
            });
          
      });

      let array1 = [];
      let array2 = [];
      let array3 = [];
      let array4 = [];
      let array5 = [];
      let array6 = [];
      let array7 = [];
      let array8 = [];

      for(let i=0; i < _sales.length; i++){
          switch(_sales[i].state){
            case 'no_cargado':

              array1.unshift(_sales[i]);

              break;
            case 'preparar_retiro':
              array2.unshift(_sales[i]);

              break;
            case 'envio_chilexpress':
              array3.unshift(_sales[i]);

              break;
            case 'envio':
              array4.unshift(_sales[i]);

              break;
            case 'programado':

              array5.unshift(_sales[i]);

              break;
            case 'cambio_tienda':

              array6.unshift(_sales[i]);

              break;
            case 'eliminado':
              array7.unshift(_sales[i]);

              break;

            case 'cargado':
              array8.unshift(_sales[i]);

              break;
          }
        }

        array1.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array2.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array3.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array4.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array5.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array6.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array7.sort(function(a,b){
          return b.fecha_carga.localeCompare(a.fecha_carga);
        })

        array8.sort(function(a,b){
          return dayjs(b.fecha_programado).format('YYYY-MM-DD HH:mm:ss').localeCompare(dayjs(a.fecha_programado).format('YYYY-MM-DD HH:mm:ss'));
        })

       const array_final = [...array1, ...array2, ...array3, ...array4, ...array5, ...array6, ...array7, ...array8];

      this.sales = array_final;
      this.playSound();

      console.log(_sales)
    },

    refreshList() {
      this.currentSale = null;
      this.currentIndex = -1;
    },

    clickImage: function(index){
        console.log(index)
    },

    update_status_order(event) {
      const status = 'cargado';
      const class_sale = event.target.id;
      const id_sale = class_sale.split('-')[0];
      const status_sale = class_sale.split('-')[1];
      console.log(event.target.id);

      let sale = this.sales.find(sale => sale.id == id_sale);
      console.log(sale);

      if(status_sale == 'preparar_retiro'){
        console.log('entro a imprimir estado: ' + status_sale + ' id: ' + id_sale);
        const params = {
          sale_id: id_sale,
          customers_phone: sale.customers_phone
        };
        
        axios.get('http://192.168.1.113/print_label.php', { params }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });

        axios.get('http://192.168.1.113/message_pickup.php' , { params }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }

      if(status_sale == 'envio_chilexpress' || status_sale == 'envio'){
        console.log('entro a imprimir estado: ' + status_sale + ' id: ' + id_sale);
        const params = {
          sale_id: id_sale,
        };
        axios.get('http://192.168.1.113/print_label_send_sale.php', { params }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }

      axios.post('https://us-central1-holospet.cloudfunctions.net/app/update_status_loader/'+id_sale, {
        sale_id: id_sale,
        status: status,
        store_id: 1
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },
    clickImage: function(index){
        console.log(index)
    },

    update_checked(event){
      const id_sale = event.target.ariaLabel;
      let id_product = event.target.id;
      const checked = event.target.checked;

      console.warn('sale_id: '+id_sale+' product_id: '+id_product+' checked: '+checked);
      
      axios.post('https://us-central1-holospet.cloudfunctions.net/app/update_checked/'+id_sale, {
        sale_id: id_sale,
        product_id: id_product,
        checked: checked,
        store_id: 1
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },

    playSound(){
      let audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
      audio.play();
    }
    
  },

  mounted() {
    SaleDataService.getAll().on("value", this.onDataChange);
  },
}
</script>