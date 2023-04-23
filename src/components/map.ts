import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const ACCESS_TOKEN =
  "pk.eyJ1IjoibWF0dmlpMSIsImEiOiJjbGZnaHc3cWgzemRpM3NudHpoZWg1NjJ6In0.ETAV7ISiLF3jGlpjJkgQeA"

mapboxgl.accessToken = ACCESS_TOKEN

const PCU_LON = 14.43381
const PCU_LAT = 50.08714
const PCU_CENTER: [number, number] = [PCU_LON, PCU_LAT]

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: PCU_CENTER,
  zoom: 12,
})

const marker = document.createElement("i") as HTMLElement
marker.className = "fa-sharp fa-solid fa-location-dot map-pin"

// map.scrollZoom.disable()
new mapboxgl.Marker(marker, { anchor: "bottom" })
  .setLngLat(PCU_CENTER)
  .addTo(map)

map.on("load", () => map.resize())
