import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';

const MapContainer = styled.div`
    height: 720px;
    `;

//  TODO: Finish
//  https://leafletjs.com/examples/quick-start/
export default function Map(props: object): JSX.Element {
    return (
        <div>
            <Helmet>
                 <link 
                    rel="stylesheet" 
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossOrigin=""
                 />
                 <script 
                    src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                    crossOrigin="" 
                 />
            </Helmet>
            <MapContainer id={`map-container-${nanoid()}`} />
        </div>
    )
}