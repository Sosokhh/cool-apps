import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-drawing-app',
  templateUrl: './drawing-app.component.html',
  styleUrls: ['./drawing-app.component.scss']
})
export class DrawingAppComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  size = 10;
  color = 'black';
  isPressed = false;
  x!: number;
  y!: number;

  ngOnInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.canvasRef.nativeElement.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvasRef.nativeElement.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvasRef.nativeElement.addEventListener('mouseup', () => this.handleMouseUp());
  }

  drawCircle(x: number, y: number): void {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  drawLine(x1: number, y1: number, x2: number, y2: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.size * 2;
    this.ctx.stroke();
  }

  handleMouseDown(e: MouseEvent): void {
    this.isPressed = true;
    this.x = e.offsetX;
    this.y = e.offsetY;
  }

  handleMouseMove(e: MouseEvent): void {
    if (this.isPressed) {
      const x2 = e.offsetX;
      const y2 = e.offsetY;

      this.drawCircle(x2, y2);
      this.drawLine(this.x, this.y, x2, y2);

      this.x = x2;
      this.y = y2;
    }
  }

  handleMouseUp(): void {
    this.isPressed = false;
    this.x = undefined!;
    this.y = undefined!;
  }

  increaseSize(): void {
    this.size += 5;
    if (this.size > 50) {
      this.size = 50;
    }
  }

  decreaseSize(): void {
    this.size -= 5;
    if (this.size < 5) {
      this.size = 5;
    }
  }

  clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }
}
