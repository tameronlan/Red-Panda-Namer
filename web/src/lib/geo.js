import bridge from '@/bridge';

export default {
    getCurrentPosition({isNative = true, toaster}) {
        return new Promise((resolve, reject) => {
            if (isNative && bridge.isSupported()) {
                bridge.invokeNative('get_location', {}, obj => {
                    if(
                        obj !== undefined
                        && obj instanceof Object
                        && obj.coordinates !== undefined
                    ) {
                        resolve({latitude: obj.coordinates.lat, longitude: obj.coordinates.lon});
                    } else {
                        reject({message: 'failed to get position'});
                    }
                });
            } else if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    position => resolve({latitude: position.coords.latitude, longitude: position.coords.longitude}),
                    error => reject(error)
                );
            } else {
                return reject({message: 'geolocation not supported'});
            }
        });
    }
}
