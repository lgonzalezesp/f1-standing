import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';
import {SummaryService} from './service/summary.service';
import {Participant, Race, Summary, Total} from './model/summary.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  summaryData: Summary | null = null;
  loading = true;
  error: string | null = null;
  races: Race[] = [];
  selectedRace: string = '';
  currentRaceData: Race | null = null;
  participants: Participant[] = [];
  totalParticipants: Total[] = [];
  lastRaceName: string = '';
  selectedParticipant: Participant | null = null;

  constructor(private readonly summaryService: SummaryService) {}

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe({
      next: (data) => {
        this.summaryData = data;
        this.loading = false;
        this.lastRaceName = this.summaryData.last_race.race_name
        this.races = [...this.summaryData.races].sort((a, b) =>
          a.race_name.localeCompare(b.race_name)
        );
        console.log(this.summaryData);

        // Ordenar los totales por puntos (de mayor a menor)
        this.totalParticipants = [...this.summaryData.totals].sort((a, b) =>
          b.total_points - a.total_points
        );
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo cargar el resumen.';
        this.loading = false;
      }
    });
  }

  onRaceSelected(): void {
    if (!this.selectedRace || !this.summaryData) {
      this.currentRaceData = null;
      this.participants = [];
      return;
    }

    this.currentRaceData = this.summaryData.races.find(race => race.race_id === this.selectedRace) || null;

    if (this.currentRaceData) {
      // Ordenar participantes por puntos (de mayor a menor)
      this.participants = [...this.currentRaceData.participants].sort((a, b) => b.points - a.points);
    }

    console.log(this.participants);
  }

  onParticipantSelected(participant: Participant): void {
    this.selectedParticipant = participant;
    console.log('Participante seleccionado:', participant);
  }

}
