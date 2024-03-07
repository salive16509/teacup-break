"use strict";
/*
 * MIT License
 *
 * Copyright (c) 2019 Rémi Van Keisbelck
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowEvents = exports.DocumentEvents = void 0;
const tea_cup_core_1 = require("tea-cup-core");
let subCount = 0;
class DocSub extends tea_cup_core_1.Sub {
    constructor(documentEvents, key, mapper, options) {
        super();
        this.documentEvents = documentEvents;
        this.key = key;
        this.mapper = mapper;
        this.options = options;
        subCount++;
        this.sc = subCount;
        this.listener = (e) => this.isActive() &&
            setTimeout(() => {
                this.dispatch(this.mapper(e));
            });
    }
    onInit() {
        super.onInit();
        this.documentEvents.doAddListener(this.key, this.listener, this.options);
    }
    onRelease() {
        super.onRelease();
        this.documentEvents.doRemoveListener(this.key, this.listener, this.options);
    }
}
class EventMapEvents {
    /**
     * Subscribe to an event.
     * @param key the event type to subscribe to.
     * @param mapper map the event to a message.
     * @param options options for this listener
     */
    on(key, mapper, options) {
        return new DocSub(this, key, mapper, options);
    }
}
/**
 * Subscribe to document events.
 */
class DocumentEvents extends EventMapEvents {
    doAddListener(key, listener, options) {
        document.addEventListener(key, listener, options);
    }
    doRemoveListener(key, listener, options) {
        document.removeEventListener(key, listener, options);
    }
}
exports.DocumentEvents = DocumentEvents;
/**
 * Bonus, WindowEvents
 */
class WindowEvents extends EventMapEvents {
    doAddListener(key, listener, options) {
        window.addEventListener(key, listener, options);
    }
    doRemoveListener(key, listener, options) {
        window.removeEventListener(key, listener, options);
    }
}
exports.WindowEvents = WindowEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRFdmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVGVhQ3VwL0RvY3VtZW50RXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7OztBQUVILCtDQUFtQztBQU1uQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFFakIsTUFBTSxNQUFzQyxTQUFRLGtCQUFRO0lBSTFELFlBQ21CLGNBQXdDLEVBQ3hDLEdBQU0sRUFDTixNQUEyQixFQUMzQixPQUF5QjtRQUUxQyxLQUFLLEVBQUUsQ0FBQztRQUxTLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUN4QyxRQUFHLEdBQUgsR0FBRyxDQUFHO1FBQ04sV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFHMUMsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsTUFBTTtRQUNkLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVTLFNBQVM7UUFDakIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0Y7QUFFRCxNQUFlLGNBQWM7SUFhM0I7Ozs7O09BS0c7SUFDSSxFQUFFLENBQ1AsR0FBTSxFQUNOLE1BQTBCLEVBQzFCLE9BQTJDO1FBRTNDLE9BQU8sSUFBSSxNQUFNLENBQWMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLGNBQW9CLFNBQVEsY0FBcUM7SUFDNUUsYUFBYSxDQUNYLEdBQU0sRUFDTixRQUEwQyxFQUMxQyxPQUEyQztRQUUzQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0JBQWdCLENBQ2QsR0FBTSxFQUNOLFFBQTBDLEVBQzFDLE9BQTJDO1FBRTNDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQWhCRCx3Q0FnQkM7QUFFRDs7R0FFRztBQUNILE1BQWEsWUFBa0IsU0FBUSxjQUFtQztJQUN4RSxhQUFhLENBQ1gsR0FBTSxFQUNOLFFBQXdDLEVBQ3hDLE9BQTJDO1FBRTNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQkFBZ0IsQ0FDZCxHQUFNLEVBQ04sUUFBd0MsRUFDeEMsT0FBMkM7UUFFM0MsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBaEJELG9DQWdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxOSBSw6ltaSBWYW4gS2Vpc2JlbGNrXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuaW1wb3J0IHsgU3ViIH0gZnJvbSAndGVhLWN1cC1jb3JlJztcblxudHlwZSBMaXN0ZW5lcjxFPiA9IChldjogRSkgPT4gYW55O1xudHlwZSBMaXN0ZW5lck9wdGlvbnMgPSBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG50eXBlIE1hcHBlcjxFLCBNc2c+ID0gKGV2OiBFKSA9PiBNc2c7XG5cbmxldCBzdWJDb3VudCA9IDA7XG5cbmNsYXNzIERvY1N1YjxLIGV4dGVuZHMga2V5b2YgTWFwLCBNYXAsIE1zZz4gZXh0ZW5kcyBTdWI8TXNnPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXI6IExpc3RlbmVyPE1hcFtLXT47XG4gIHByaXZhdGUgc2M6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50RXZlbnRzOiBFdmVudE1hcEV2ZW50czxNYXAsIE1zZz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBrZXk6IEssXG4gICAgcHJpdmF0ZSByZWFkb25seSBtYXBwZXI6IE1hcHBlcjxNYXBbS10sIE1zZz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zPzogTGlzdGVuZXJPcHRpb25zLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHN1YkNvdW50Kys7XG4gICAgdGhpcy5zYyA9IHN1YkNvdW50O1xuICAgIHRoaXMubGlzdGVuZXIgPSAoZSkgPT5cbiAgICAgIHRoaXMuaXNBY3RpdmUoKSAmJlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2godGhpcy5tYXBwZXIoZSkpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25Jbml0KCkge1xuICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgIHRoaXMuZG9jdW1lbnRFdmVudHMuZG9BZGRMaXN0ZW5lcih0aGlzLmtleSwgdGhpcy5saXN0ZW5lciwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblJlbGVhc2UoKSB7XG4gICAgc3VwZXIub25SZWxlYXNlKCk7XG4gICAgdGhpcy5kb2N1bWVudEV2ZW50cy5kb1JlbW92ZUxpc3RlbmVyKHRoaXMua2V5LCB0aGlzLmxpc3RlbmVyLCB0aGlzLm9wdGlvbnMpO1xuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEV2ZW50TWFwRXZlbnRzPE1hcCwgTXNnPiB7XG4gIGFic3RyYWN0IGRvQWRkTGlzdGVuZXI8SyBleHRlbmRzIGtleW9mIE1hcD4oXG4gICAga2V5OiBLLFxuICAgIGxpc3RlbmVyOiAoZXY6IE1hcFtLXSkgPT4gYW55LFxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsXG4gICk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgZG9SZW1vdmVMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgTWFwPihcbiAgICBrZXk6IEssXG4gICAgbGlzdGVuZXI6IChldjogTWFwW0tdKSA9PiBhbnksXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBldmVudCB0eXBlIHRvIHN1YnNjcmliZSB0by5cbiAgICogQHBhcmFtIG1hcHBlciBtYXAgdGhlIGV2ZW50IHRvIGEgbWVzc2FnZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBmb3IgdGhpcyBsaXN0ZW5lclxuICAgKi9cbiAgcHVibGljIG9uPEsgZXh0ZW5kcyBrZXlvZiBNYXAsIE1zZz4oXG4gICAga2V5OiBLLFxuICAgIG1hcHBlcjogKGU6IE1hcFtLXSkgPT4gTXNnLFxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsXG4gICk6IFN1YjxNc2c+IHtcbiAgICByZXR1cm4gbmV3IERvY1N1YjxLLCBNYXAsIE1zZz4odGhpcywga2V5LCBtYXBwZXIsIG9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIGRvY3VtZW50IGV2ZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50RXZlbnRzPE1zZz4gZXh0ZW5kcyBFdmVudE1hcEV2ZW50czxEb2N1bWVudEV2ZW50TWFwLCBNc2c+IHtcbiAgZG9BZGRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcD4oXG4gICAga2V5OiBLLFxuICAgIGxpc3RlbmVyOiAoZXY6IERvY3VtZW50RXZlbnRNYXBbS10pID0+IGFueSxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZG9SZW1vdmVMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcD4oXG4gICAga2V5OiBLLFxuICAgIGxpc3RlbmVyOiAoZXY6IERvY3VtZW50RXZlbnRNYXBbS10pID0+IGFueSxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICogQm9udXMsIFdpbmRvd0V2ZW50c1xuICovXG5leHBvcnQgY2xhc3MgV2luZG93RXZlbnRzPE1zZz4gZXh0ZW5kcyBFdmVudE1hcEV2ZW50czxXaW5kb3dFdmVudE1hcCwgTXNnPiB7XG4gIGRvQWRkTGlzdGVuZXI8SyBleHRlbmRzIGtleW9mIFdpbmRvd0V2ZW50TWFwPihcbiAgICBrZXk6IEssXG4gICAgbGlzdGVuZXI6IChldjogV2luZG93RXZlbnRNYXBbS10pID0+IGFueSxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihrZXksIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGRvUmVtb3ZlTGlzdGVuZXI8SyBleHRlbmRzIGtleW9mIFdpbmRvd0V2ZW50TWFwPihcbiAgICBrZXk6IEssXG4gICAgbGlzdGVuZXI6IChldjogV2luZG93RXZlbnRNYXBbS10pID0+IGFueSxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxufVxuIl19