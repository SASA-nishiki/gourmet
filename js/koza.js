// 地図の埋め込み
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 34.7019399, // 緯度
            lng: 135.51002519999997 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
}

// 地図にマーカーを立てる
var map;
var marker;
var center = {
    lat: 34.7019399, // 緯度
    lng: 135.51002519999997 // 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: 19 // 地図のズームを指定
    });

    marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
    });
}

// マーカーに吹き出しを追加
var map;
var marker;
var infoWindow;
var center = {
    lat: 34.7019399, // 緯度
    lng: 135.51002519999997 // 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: 19 // 地図のズームを指定
    });

    marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
    });

    infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">TAM 大阪</div>' // 吹き出しに表示する内容
    });
    marker.addListener('click', function () { // マーカーをクリックしたとき
        infoWindow.open(map, marker); // 吹き出しの表示
    });
}
// 住所から緯度と経緯を調べる
var geocoder;

function initMap() {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': '東京都千代田区神田小川町3-28-9' // TAM 東京
    }, function (results, status) { // 結果
        if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
            console.group('Success');
            console.log(results);
            console.log(status);
        } else { // 失敗した場合
            console.group('Error');
            console.log(results);
            console.log(status);
        }
    });
}

// 調べた結果を使って、地図とマーカーを表示
var map;
var marker;
var geocoder;

function initMap() {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': '東京都千代田区神田小川町3-28-9' // TAM 東京
    }, function (results, status) { // 結果
        if (status === google.maps.GeocoderStatus.OK) { // ステータスがOKの場合
            map = new google.maps.Map(document.getElementById('sample'), {
                center: results[0].geometry.location, // 地図の中心を指定
                zoom: 19 // 地図のズームを指定
            });
            marker = new google.maps.Marker({
                position: results[0].geometry.location, // マーカーを立てる位置を指定
                map: map // マーカーを立てる地図を指定
            });
        } else { // 失敗した場合
            alert(status);
        }
    });
}

// google mapに複数マーカーを立てる
var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
    {
        name: 'TAM 東京',
        lat: 35.6954806,
        lng: 139.76325010000005,
        icon: 'tam.png' // TAM 東京のマーカーだけイメージを変更する
    }, {
        name: '小川町駅',
        lat: 35.6951212,
        lng: 139.76610649999998
    }, {
        name: '淡路町駅',
        lat: 35.69496,
        lng: 139.76746000000003
    }, {
        name: '御茶ノ水駅',
        lat: 35.6993529,
        lng: 139.76526949999993
    }, {
        name: '神保町駅',
        lat: 35.695932,
        lng: 139.75762699999996
    }, {
        name: '新御茶ノ水駅',
        lat: 35.696932,
        lng: 139.76543200000003
    }
];

function initMap() {
    // 地図の作成
    var mapLatLng = new google.maps.LatLng({
        lat: markerData[0]['lat'],
        lng: markerData[0]['lng']
    }); // 緯度経度のデータ作成
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: mapLatLng, // 地図の中心を指定
        zoom: 15 // 地図のズームを指定
    });

    // マーカー毎の処理
    for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({
            lat: markerData[i]['lat'],
            lng: markerData[i]['lng']
        }); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
            position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
        });

        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });

        markerEvent(i); // マーカーにクリックイベントを追加
    }

    marker[0].setOptions({ // TAM 東京のマーカーのオプション設定
        icon: {
            url: markerData[0]['icon'] // マーカーの画像を変更
        }
    });
}

// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function () { // マーカーをクリックしたとき
        infoWindow[i].open(map, marker[i]); // 吹き出しの表示
    });
}