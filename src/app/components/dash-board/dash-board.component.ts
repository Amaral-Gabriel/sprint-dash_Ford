import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  imports: [CommonModule, FormsModule, HeaderComponent],
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  vehicles: any[] = [];
  img: string = '';  // Variável para armazenar a URL da imagem
  totalVendas: number = 0;
  conectados: number = 0;
  updateSoftware: number = 0;
  selectedVehicle: any = null;
  vehicleData: any = null;
  vinInput: string = ''; // Novo campo para capturar o VIN digitado
  errorMessage: string = '';
  isLoading: boolean = false;
  inputInvalido: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadVehicles();
    
  }

  loadVehicles() {
    this.isLoading = true;
    this.api.getVehicles().subscribe({
      next: (response: any) => {
        this.vehicles = response.vehicles;
        if (this.vehicles.length > 0) {
          this.selectedVehicle = this.vehicles[0];  
          this.img = this.selectedVehicle.img + '?' + new Date().getTime();
          this.totalVendas = this.selectedVehicle.volumetotal;
          this.conectados = this.selectedVehicle.connected;
          this.updateSoftware = this.selectedVehicle.softwareUpdates;
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar veículos.';
        console.error(err);
        this.isLoading = false;
        console.log('Imagem selecionada:', this.img);
        console.log('Veículo selecionado:', this.selectedVehicle);
      }
    });
  }

  onVehicleSelect(event: Event) {
    let selectElement = event.target as HTMLSelectElement;
    if (selectElement && selectElement.value) {
      const vehicleId = selectElement.value;
      this.selectedVehicle = this.vehicles.find(v => v.id === Number(vehicleId));
      // Atualiza os dados do veículo selecionado
      if (this.selectedVehicle) {
        this.img = this.selectedVehicle.img + '?' + new Date().getTime();
        this.totalVendas = this.selectedVehicle.volumetotal;
        this.conectados = this.selectedVehicle.connected;
        this.updateSoftware = this.selectedVehicle.softwareUpdates;
      }
    }
    console.log('Imagem selecionada:', this.img);
    console.log('Veículo selecionado:', this.selectedVehicle);
  }

  buscarPorVin() {
    if (!this.vinInput) return;
  
    this.isLoading = true;
    this.api.getVehicleData(this.vinInput).subscribe({
      next: (data: any) => {
        this.vehicleData = data;
        this.errorMessage = '';
        this.isLoading = false;
        this.inputInvalido = false; // VIN encontrado
      },
      error: (err) => {
        this.vehicleData = null;
        this.errorMessage = err.error?.message || 'Erro ao buscar dados do veículo';
        this.isLoading = false;
        this.inputInvalido = true; // VIN inválido
      }
    });
  }
  }

