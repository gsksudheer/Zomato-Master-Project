import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import { FaDirections } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = (props) => {
    return (
        <div>
            <div>
                <h4 className="text-lg">Call</h4>
                <h5 className="text-zred-400">{props.phno}</h5>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-xl pt-4">Direction</h4>
                <div className="w-full h-48">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                          <Popup>
                            {props}
                          </Popup>
                        </Marker>
                    </MapContainer>   
                </div>
                <p>
                 {props.address}
                </p>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-gray-700 border border-gray-400 px-3 py-2 rounded-lg ">
                          <MdContentCopy />
                          copy
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border-2 border-gray-400 rounded-md">
                        <span className="text-zred-500">
                        <FaDirections />
                        </span>
                        Direction
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default MapView;
