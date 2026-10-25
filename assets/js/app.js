/**
 * AN NHIÊN – ĐÀ LẠT MỘNG MƠ | Main Application Script
 * Tác giả: Trịnh Thị An – Thương hiệu: An Nhiên AI (TTA)
 */

    (function () {
      'use strict';

      // Đường dẫn 10 ảnh chất lượng cao được tạo riêng cho dự án (sẽ được inline Base64)
      const IMG = {
        xuanHuong: "assets/images/ho-xuan-huong-suong-som.webp",
        pineCloud: "assets/images/doi-thong-bien-may.webp",
        cherrySlope: "assets/images/doc-mai-anh-dao.webp",
        villaFlower: "assets/images/biet-thu-co-vuon-hoa.webp",
        summerRain: "assets/images/chieu-mua-phuong-tim.webp",
        autumnGrass: "assets/images/doi-co-mua-thu.webp",
        pineCafe: "assets/images/quan-ca-phe-rung-thong.webp",
        teaHills: "assets/images/doi-che-cau-dat.webp",
        aiFantasy: "assets/images/da-lat-nghe-thuat-ai.webp",
        authorAvatar: "assets/images/chan-dung-trinh-thi-an.webp"
      };

      // 1. DỮ LIỆU BANNER CHÍNH (5 CẢNH SẮC ĐÀ LẠT)
      const HERO_SLIDES = [
        {
          img: IMG.xuanHuong,
          badge: "Cảnh sắc 1/5 • Hồ Xuân Hương trong sương sớm",
          caption: "Mặt hồ phẳng lặng như gương soi bóng hàng thông già trong buổi sớm tinh sương."
        },
        {
          img: IMG.pineCloud,
          badge: "Cảnh sắc 2/5 • Đồi thông & Thung lũng mây lúc bình minh",
          caption: "Những tia nắng vàng đầu ngày xuyên qua biển mây bồng bềnh trên đỉnh đồi thông."
        },
        {
          img: IMG.cherrySlope,
          badge: "Cảnh sắc 3/5 • Những con đường quanh co dưới tán thông & hoa xuân",
          caption: "Con dốc nhỏ thơ mộng rợp sắc hồng mai anh đào trong nắng mai dịu ngọt."
        },
        {
          img: IMG.villaFlower,
          badge: "Cảnh sắc 4/5 • Biệt thự cổ giữa vườn hoa cẩm tú cầu",
          caption: "Nét kiến trúc Pháp cổ kính trầm mặc giữa khu vườn hoa cẩm tú cầu xanh biếc."
        },
        {
          img: IMG.teaHills,
          badge: "Cảnh sắc 5/5 • Đồi chè Cầu Đất đón nắng sớm",
          caption: "Những luống chè xanh mướt uốn lượn hòa cùng làn sương mỏng miền cao nguyên."
        }
      ];

      // 2. DỮ LIỆU BỐN MÙA ĐÀ LẠT
      const SEASONS_DATA = {
        xuan: {
          name: "Xuân Đà Lạt – Khúc Giao Mùa Của Mai Anh Đào & Nắng Sớm",
          weather: "Tiết trời se lạnh buổi sớm, trưa hửng nắng trong trẻo, nhiệt độ dịu mát dễ chịu.",
          flowers: "Mai anh đào nhuộm hồng các triền dốc, hoa ban trắng và những khu vườn xuân trăm hoa đua nở (thời điểm nở rộ tùy thuộc độ lạnh từng năm, thường vào khoảng đầu năm dương lịch).",
          intro: "Mùa xuân đánh thức Đà Lạt bằng sắc hồng dịu dàng của hoa mai anh đào in bóng xuống mặt Hồ Xuân Hương và những triền đồi chè Cầu Đất xanh non.",
          highlights: [
            "Ngắm mai anh đào nở dọc những con dốc và ven hồ trong nắng sớm.",
            "Dạo bước giữa những khu vườn hoa mùa xuân và thưởng trà sớm.",
            "Đón bình minh trong veo trên đồi chè xanh mướt và phố núi yên bình."
          ],
          mainImg: IMG.cherrySlope,
          gallery: [
            { title: "Con dốc mùa hoa mai anh đào", img: IMG.cherrySlope },
            { title: "Đồi chè đón nắng xuân", img: IMG.teaHills },
            { title: "Sương sớm Hồ Xuân Hương", img: IMG.xuanHuong }
          ]
        },
        ha: {
          name: "Hạ Đà Lạt – Bản Tình Ca Phượng Tím & Những Cơn Mưa Rào",
          weather: "Những buổi sáng nắng dịu xen lẫn những cơn mưa chiều bất chợt mang lại không khí mát lành, tránh nóng lý tưởng.",
          flowers: "Sắc phượng tím lãng mạn bên thung lũng và những cánh đồng cẩm tú cầu bung nở căng tràn sức sống sau mưa.",
          intro: "Mùa hạ ở Đà Lạt không oi ả mà dịu dàng với sắc tím mộng mơ của hoa phượng và tiếng mưa rơi rả rích bên hiên quán cà phê gỗ.",
          highlights: [
            "Chiêm ngưỡng sắc hoa phượng tím trầm mặc ven hồ và trên các tuyến phố cổ.",
            "Ngồi bên hiên gỗ nhâm nhi ly cà phê nóng, lắng nghe tiếng mưa chiều phố núi.",
            "Khám phá những khu vườn cẩm tú cầu xanh tím mướt mắt trong sương ẩm."
          ],
          mainImg: IMG.summerRain,
          gallery: [
            { title: "Phượng tím và cẩm tú cầu trong mưa hạ", img: IMG.summerRain },
            { title: "Biệt thự cổ giữa vườn cẩm tú cầu", img: IMG.villaFlower },
            { title: "Hiên cà phê ấm áp chiều mưa", img: IMG.pineCafe }
          ]
        },
        thu: {
          name: "Thu Đà Lạt – Nắng Vàng Như Mật & Đồi Cỏ Trong Sương Chiều",
          weather: "Nắng vàng ươm như mật ong vào ban ngày, chiều buông sương giăng nhẹ và gió heo may se lạnh.",
          flowers: "Đồi cỏ hồng, cỏ tuyết phủ sương mai và sắc vàng rực rỡ của hoa dã quỳ nơi ngoại ô khi thu sang đông.",
          intro: "Thu Đà Lạt là mùa của những tâm hồn nghệ sĩ: ánh nắng chiều nhuộm vàng rừng thông và những con đường uốn lượn ngập tràn chất thơ.",
          highlights: [
            "Dạo bước trên những đồi cỏ hồng và rừng thông ngập nắng vàng buổi sớm.",
            "Tận hưởng buổi chiều nhiều sương trên những cung đường lãng mạn.",
            "Lưu giữ những khung hình hoàng hôn ấm áp nhìn xuống thung lũng."
          ],
          mainImg: IMG.autumnGrass,
          gallery: [
            { title: "Đồi cỏ hồng dưới nắng thu vàng", img: IMG.autumnGrass },
            { title: "Rừng thông trong sương thu", img: IMG.pineCloud },
            { title: "Biệt thự cổ mùa thu", img: IMG.villaFlower }
          ]
        },
        dong: {
          name: "Đông Đà Lạt – Biển Sương Mù, Cái Lạnh Phố Núi & Quán Nhỏ Ấm Áp",
          weather: "Không khí lạnh đặc trưng vùng cao nguyên, sương mù dày vào sáng sớm và đêm muộn.",
          flowers: "Cỏ tuyết ngậm sương trắng xóa lúc bình minh và những vườn hoa ôn đới khoe sắc trong giá lạnh.",
          intro: "Đông về, Đà Lạt khoác lên mình chiếc áo sương mù huyền ảo. Không gì bình yên hơn khoảnh khắc quàng chiếc khăn len ấm, ngắm bình minh trên đồi thông và tìm về một quán cà phê nhỏ.",
          highlights: [
            "Săn biển mây và sương mù dày đặc bao phủ các triền đồi lúc bình minh.",
            "Cảm nhận cái lạnh se sắt rất riêng của phố núi khi dạo quanh Hồ Xuân Hương.",
            "Quây quần bên ánh đèn vàng ấm áp trong những quán cà phê gỗ cổ điển."
          ],
          mainImg: IMG.pineCloud,
          gallery: [
            { title: "Biển mây và sương sớm mùa đông", img: IMG.pineCloud },
            { title: "Quán cà phê gỗ ấm áp", img: IMG.pineCafe },
            { title: "Hồ Xuân Hương mờ sương", img: IMG.xuanHuong }
          ]
        }
      };

      // 3. DỮ LIỆU 10 ĐỊA ĐIỂM KHÔNG THỂ QUÊN (CÓ TỌA ĐỘ XÁC THỰC)
      const PLACES_DATA = [
        {
          id: "place-1",
          name: "Hồ Xuân Hương",
          category: "ho-thac",
          mapCat: "ho-thac",
          img: IMG.xuanHuong,
          shortDesc: "Trái tim xanh thơ mộng giữa lòng thành phố Đà Lạt, nơi mặt nước phẳng lặng soi bóng rừng thông và sương sớm.",
          highlight: "Cung đường dạo bộ ven hồ rợp bóng thông, cầu chữ Y và vẻ đẹp tĩnh lặng lúc bình minh.",
          bestTime: "Sáng sớm (5:30 – 7:30) khi sương còn giăng trên mặt nước hoặc lúc hoàng hôn (16:30 – 17:45).",
          lat: 11.9428,
          lng: 108.4419
        },
        {
          id: "place-2",
          name: "Hồ Tuyền Lâm",
          category: "ho-thac",
          mapCat: "ho-thac",
          img: IMG.pineCloud,
          shortDesc: "Hồ nước ngọt rộng lớn nằm tĩnh lặng giữa bạt ngàn rừng thông xanh, mang vẻ đẹp sơn thủy hữu tình.",
          highlight: "Không gian khoáng đạt, mặt hồ phẳng lặng tách biệt khỏi nhịp sống ồn ào của phố thị.",
          bestTime: "Buổi sáng sớm ngắm sương bay trên mặt hồ hoặc buổi chiều tản bộ ven rừng thông.",
          lat: 11.9025,
          lng: 108.4316
        },
        {
          id: "place-3",
          name: "Thung lũng Tình Yêu",
          category: "ho-thac",
          mapCat: "tham-quan",
          img: IMG.summerRain,
          shortDesc: "Thung lũng lãng mạn nổi tiếng với đồi thông xanh, hồ Đa Thiện và những vườn hoa rực rỡ quanh năm.",
          highlight: "Cảnh quan đồi thông bao quanh hồ nước và những tiểu cảnh vườn hoa cẩm tú cầu thơ mộng.",
          bestTime: "Buổi sáng (7:30 – 10:30) hoặc buổi chiều nắng nhẹ (14:30 – 16:30).",
          lat: 11.9774,
          lng: 108.4485
        },
        {
          id: "place-4",
          name: "Đồi chè Cầu Đất",
          category: "thien-nhien",
          mapCat: "chup-anh",
          img: IMG.teaHills,
          shortDesc: "Những đồi chè xanh mướt tuổi đời hàng trăm năm trải dài nối tiếp nhau giữa biển mây và gió cao nguyên.",
          highlight: "Không gian xanh bát ngát, điểm săn mây bình minh và ngắm tua-bin gió nổi bật.",
          bestTime: "Bình minh (5:15 – 7:30) để đón biển mây và ánh nắng đầu ngày.",
          lat: 11.8726,
          lng: 108.5621
        },
        {
          id: "place-5",
          name: "Ga Đà Lạt",
          category: "kien-truc",
          mapCat: "tham-quan",
          img: IMG.villaFlower,
          shortDesc: "Nhà ga cổ kính mang đậm dấu ấn kiến trúc Pháp kết hợp hình dáng ba đỉnh núi Langbiang biểu tượng.",
          highlight: "Đầu tàu hơi nước cổ điển và tuyến đường sắt răng cưa lịch sử nối tới Trại Mát.",
          bestTime: "Buổi sáng (8:00 – 10:30) hoặc buổi chiều (15:00 – 17:00) khi ánh nắng chiếu xiên qua mái vòm.",
          lat: 11.9417,
          lng: 108.4547
        },
        {
          id: "place-6",
          name: "Vườn hoa Thành phố Đà Lạt",
          category: "thien-nhien",
          mapCat: "vuon-hoa",
          img: IMG.summerRain,
          shortDesc: "Nơi quy tụ hàng trăm loài hoa đặc trưng của cao nguyên Lâm Viên nằm ngay phía cuối Hồ Xuân Hương.",
          highlight: "Cổng hoa biểu tượng, các đại lộ hoa theo mùa, khu vườn xương rồng và hoa lan.",
          bestTime: "Buổi sáng (7:30 – 10:00) khi hoa còn đọng sương sớm và ánh sáng dịu nhẹ.",
          lat: 11.9515,
          lng: 108.4491
        },
        {
          id: "place-7",
          name: "Nhà thờ Chính tòa Đà Lạt (Nhà thờ Con Gà)",
          category: "kien-truc",
          mapCat: "tham-quan",
          img: IMG.villaFlower,
          shortDesc: "Công trình kiến trúc Roman cổ điển tiêu biểu của Đà Lạt với tháp chuông vươn cao trên nền trời phố núi.",
          highlight: "Các khung cửa kính màu châu Âu tinh xảo và sắc tường hồng trầm ấm giữa rừng thông.",
          bestTime: "Buổi sáng nắng trong hoặc chiều hoàng hôn (lưu ý giữ trật tự tôn nghiêm khi tham quan).",
          lat: 11.9362,
          lng: 108.4376
        },
        {
          id: "place-8",
          name: "Những con dốc đặc trưng Đà Lạt",
          category: "kien-truc",
          mapCat: "chup-anh",
          img: IMG.cherrySlope,
          shortDesc: "Những con dốc uốn lượn nối liền các triền đồi, mái nhà cổ và hàng thông già làm nên nét duyên rất riêng của phố núi.",
          highlight: "Bố cục tầng lớp giàu chất điện ảnh, đẹp dịu dàng trong sương sớm và dưới ánh đèn vàng.",
          bestTime: "Sáng sớm vắng người hoặc chiều tà (luôn chú ý an toàn giao thông khi dừng chụp ảnh).",
          lat: 11.9395,
          lng: 108.4342
        },
        {
          id: "place-9",
          name: "Những khu rừng thông ngoại ô",
          category: "thien-nhien",
          mapCat: "chup-anh",
          img: IMG.autumnGrass,
          shortDesc: "Bạt ngàn thông ba lá rì rào trong gió dọc các cung đường đèo Prenn, Tuyền Lâm và Đồi Cỏ Hồng.",
          highlight: "Thảm lá thông khô, tia nắng xuyên qua tán lá (ray sáng) và bầu không khí trong lành.",
          bestTime: "6:00 – 8:30 sáng khi tia nắng chiếu xiên qua lớp sương mỏng trong rừng thông.",
          lat: 12.0038,
          lng: 108.4192
        },
        {
          id: "place-10",
          name: "Đồi Thiên Phúc Đức & Điểm ngắm bình minh, hoàng hôn",
          category: "thien-nhien",
          mapCat: "chup-anh",
          img: IMG.pineCloud,
          shortDesc: "Ngọn đồi thoáng đãng với hình ảnh cây thông cô đơn nhìn thẳng về hướng đỉnh Langbiang hùng vĩ.",
          highlight: "Tầm nhìn toàn cảnh thung lũng mây lúc rạng đông và ánh hoàng hôn tím thẫm chiều buông.",
          bestTime: "Bình minh (5:30 – 6:45) hoặc Hoàng hôn (16:45 – 17:45).",
          lat: 11.9896,
          lng: 108.4321
        }
      ];

      // 4. DỮ LIỆU 6 KHÔNG GIAN QUÁN CÀ PHÊ ĐẶC TRƯNG
      const CAFES_DATA = [
        {
          id: "cafe-1",
          name: "Không gian Cà phê ngắm rừng thông",
          filter: "rung-thong",
          area: "Khu vực Đèo Prenn / Đồi Robin / Hồ Tuyền Lâm",
          style: "Mộc mạc (Rustic Wood), ban công gỗ mở ra thung lũng thông xanh",
          desc: "Những quán cà phê dựng bằng gỗ thông nằm lưng chừng đồi, nơi bạn có thể vừa nhâm nhi tách cà phê Arabica Cầu Đất nóng hổi vừa lắng nghe tiếng gió thông rì rào.",
          img: IMG.pineCafe,
          lat: 11.9195,
          lng: 108.4452
        },
        {
          id: "cafe-2",
          name: "Không gian Cà phê bên hồ",
          filter: "ben-ho",
          area: "Khu vực ven Hồ Xuân Hương & Hồ Tuyền Lâm",
          style: "Lãng mạn, thoáng đãng, nhìn thẳng ra mặt nước mờ sương",
          desc: "Thưởng thức trà nóng hoặc cà phê sữa trong khung cảnh mặt hồ tĩnh lặng buổi sớm mai, cảm nhận trọn vẹn nhịp sống chậm rãi của Đà Lạt.",
          img: IMG.xuanHuong,
          lat: 11.9432,
          lng: 108.4385
        },
        {
          id: "cafe-3",
          name: "Không gian Cà phê sân vườn hoa cỏ",
          filter: "ben-ho",
          area: "Khu vực Phường 3, Phường 4 & Trại Mát",
          style: "Sân vườn nhiệt đới & ôn đới ngập tràn cẩm tú cầu, cúc họa mi",
          desc: "Không gian xanh mát với lối đi lát đá, giàn hoa leo và những góc ngồi yên tĩnh giữa vườn hoa đang độ khoe sắc.",
          img: IMG.summerRain,
          lat: 11.9312,
          lng: 108.4295
        },
        {
          id: "cafe-4",
          name: "Không gian Cà phê phong cách cổ điển",
          filter: "co-dien",
          area: "Khu vực trung tâm Hòa Bình, Trương Công Định & Biệt thự cổ Trần Hưng Đạo",
          style: "Hoài niệm (Vintage Indochine & Retro), ánh đèn vàng ấm và nhạc Trịnh",
          desc: "Lưu giữ ký ức Đà Lạt xưa qua những bộ bàn ghế gỗ nhuốm màu thời gian, chiếc radio cũ và những bản tình ca du dương trong chiều mưa.",
          img: IMG.villaFlower,
          lat: 11.9408,
          lng: 108.4488
        },
        {
          id: "cafe-5",
          name: "Không gian Cà phê săn mây ngắm bình minh",
          filter: "binh-minh",
          area: "Khu vực Cầu Đất – Xuân Trường & Đa Sar",
          style: "Sàn gỗ ngoài trời trên đỉnh đồi cao đón biển mây sớm",
          desc: "Điểm hẹn lúc 5h30 sáng cho những tâm hồn yêu vẻ đẹp kỳ vĩ của biển mây trắng xóa dưới chân đồi chè khi mặt trời vừa ló rạng.",
          img: IMG.teaHills,
          lat: 11.8735,
          lng: 108.5605
        },
        {
          id: "cafe-6",
          name: "Không gian Cà phê ngắm hoàng hôn",
          filter: "binh-minh",
          area: "Khu vực Dốc Hùng Vương, Trại Mát & Đồi Dã Chiến",
          style: "Tầm nhìn hướng Tây thoáng rộng nhìn xuống thung lũng đèn lồng",
          desc: "Nơi ngắm bầu trời Đà Lạt chuyển sắc từ vàng cam sang tím biếc khi chiều buông và những nhà lồng hoa bắt đầu lên đèn ấm áp.",
          img: IMG.autumnGrass,
          lat: 11.9492,
          lng: 108.4765
        }
      ];

      // 5. DỮ LIỆU 6 LOẠI HÌNH HOMESTAY & CHỐN DỪNG CHÂN
      const HOMESTAYS_DATA = [
        {
          id: "stay-1",
          name: "Homestay ẩn mình giữa rừng thông",
          filter: "rung-thong",
          area: "Khu vực Đặng Thái Thân, Khởi Nghĩa Bắc Sơn & Tuyền Lâm",
          amenities: "Ban công nhìn ra rừng thông, lò sưởi ấm, khu vườn nướng BBQ nhỏ, trà nóng buổi sáng",
          desc: "Không gian lưu trú tách biệt phố thị, mỗi sáng thức dậy mở cửa sổ là đón làn sương mỏng và hương nhựa thông tinh khiết.",
          img: IMG.pineCafe
        },
        {
          id: "stay-2",
          name: "Homestay nhìn ra thung lũng mây",
          filter: "rung-thong",
          area: "Khu vực Hùng Vương, Trại Mát & Xuân Thọ",
          amenities: "Khung cửa kính lớn toàn cảnh (Panorama), sân hiên săn mây, phòng nghỉ lót gỗ ấm",
          desc: "Dành cho du khách muốn ngắm biển mây bình minh và thung lũng đèn lung linh về đêm ngay từ chiếc giường ấm áp.",
          img: IMG.pineCloud
        },
        {
          id: "stay-3",
          name: "Biệt thự cổ kiến trúc Pháp",
          filter: "biet-thu",
          area: "Khu vực đường Trần Hưng Đạo, Lê Lai & Nguyễn Du",
          amenities: "Khuôn viên vườn hoa cổ thụ, ống khói lò sưởi nguyên bản, phòng sinh hoạt chung sang trọng",
          desc: "Trải nghiệm cảm giác sống chậm trong những căn biệt thự di sản với tường vàng, cửa chớp gỗ và khu vườn cẩm tú cầu yên tĩnh.",
          img: IMG.villaFlower
        },
        {
          id: "stay-4",
          name: "Nhà gỗ nhỏ trên đồi (Wooden Bungalow)",
          filter: "biet-thu",
          area: "Khu vực Đồi Đa Phú, An Sơn & Tà Nung",
          amenities: "Nội thất gỗ thông tự nhiên, hiên uống trà riêng, vườn hồng và lối đi lát đá",
          desc: "Những căn nhà gỗ mộc mạc, ấm cúng, giữ trọn hơi thở truyền thống của phố núi sương mù.",
          img: IMG.cherrySlope
        },
        {
          id: "stay-5",
          name: "Không gian nghỉ dưỡng dành cho gia đình",
          filter: "gia-dinh",
          area: "Khu vực trung tâm mở rộng & Hồ Tuyền Lâm",
          amenities: "Sân vườn bằng phẳng dễ đi lại cho người lớn tuổi, phòng gia đình liên thông, bếp ấm cúng",
          desc: "Ưu tiên lối đi ít bậc thang dốc, không gian yên tĩnh, ấm áp để cả gia đình nhiều thế hệ cùng sum vầy.",
          img: IMG.xuanHuong
        },
        {
          id: "stay-6",
          name: "Không gian tĩnh lặng cho người yêu thiên nhiên",
          filter: "gia-dinh",
          area: "Khu vực ngoại ô Cầu Đất & Suối Vàng",
          amenities: "Góc đọc sách, vườn thiền trà, lối dạo bộ dưới tán thông, hạn chế tiếng ồn",
          desc: "Chốn dừng chân chữa lành để lắng nghe tiếng chim hót buổi sớm, đọc một cuốn sách hay và tìm lại sự an nhiên trong tâm hồn.",
          img: IMG.autumnGrass
        }
      ];

      // 6. DỮ LIỆU 10 ALBUM MẪU CHO THƯ VIỆN ẢNH ĐÀ LẠT
      const ALBUM_CATEGORIES = [
        { id: "all", name: "Tất cả Album (10)" },
        { id: "binh-minh", name: "1. Đà Lạt bình minh" },
        { id: "chieu-mua", name: "2. Đà Lạt chiều mưa" },
        { id: "ho-xuan-huong", name: "3. Hồ Xuân Hương" },
        { id: "nhung-con-doc", name: "4. Những con dốc" },
        { id: "hoa-da-lat", name: "5. Hoa Đà Lạt" },
        { id: "rung-thong", name: "6. Rừng thông" },
        { id: "kien-truc", name: "7. Kiến trúc Đà Lạt" },
        { id: "ve-dem", name: "8. Đà Lạt về đêm" },
        { id: "ky-uc", name: "9. Đà Lạt trong ký ức" },
        { id: "nghe-thuat-ai", name: "10. Đà Lạt qua nghệ thuật AI" }
      ];

      const DEFAULT_GALLERY_ITEMS = [
        {
          id: "photo-1",
          title: "Bình minh gọi nắng trên biển mây đại ngàn",
          album: "binh-minh",
          albumLabel: "1. Đà Lạt bình minh",
          sourceType: "real",
          date: "2026-01-15",
          allowDownload: true,
          img: IMG.pineCloud,
          desc: "Khoảnh khắc tia nắng đầu tiên xuyên qua tầng mây trắng xóa ôm ấp những ngọn đồi thông Đà Lạt."
        },
        {
          id: "photo-2",
          title: "Chiều mưa tím bên vườn cẩm tú cầu và phượng tím",
          album: "chieu-mua",
          albumLabel: "2. Đà Lạt chiều mưa",
          sourceType: "real",
          date: "2026-02-10",
          allowDownload: true,
          img: IMG.summerRain,
          desc: "Cơn mưa rào mùa hạ làm bừng sáng sắc tím mộng mơ của hoa phượng và những đóa cẩm tú cầu đọng nước."
        },
        {
          id: "photo-3",
          title: "Hồ Xuân Hương tĩnh lặng trong sương mai",
          album: "ho-xuan-huong",
          albumLabel: "3. Hồ Xuân Hương",
          sourceType: "real",
          date: "2026-02-28",
          allowDownload: true,
          img: IMG.xuanHuong,
          desc: "Mặt hồ phẳng lặng phản chiếu ánh bình minh dịu nhẹ và làn sương mỏng như khói."
        },
        {
          id: "photo-4",
          title: "Con dốc nhỏ mùa mai anh đào nở rộ",
          album: "nhung-con-doc",
          albumLabel: "4. Những con dốc",
          sourceType: "real",
          date: "2026-03-05",
          allowDownload: true,
          img: IMG.cherrySlope,
          desc: "Con đường dốc quanh co dưới tán thông già và những hàng mai anh đào hồng thắm."
        },
        {
          id: "photo-5",
          title: "Sắc hoa Đà Lạt giữa sương sớm",
          album: "hoa-da-lat",
          albumLabel: "5. Hoa Đà Lạt",
          sourceType: "real",
          date: "2026-03-18",
          allowDownload: true,
          img: IMG.summerRain,
          desc: "Vẻ đẹp dịu dàng của những vườn hoa cẩm tú cầu và phượng tím đặc trưng phố núi."
        },
        {
          id: "photo-6",
          title: "Rừng thông và đồi cỏ hồng lúc chiều thu",
          album: "rung-thong",
          albumLabel: "6. Rừng thông",
          sourceType: "real",
          date: "2026-04-02",
          allowDownload: true,
          img: IMG.autumnGrass,
          desc: "Nắng chiều nhuộm vàng thảm cỏ hồng mềm mại dưới chân rừng thông ba lá."
        },
        {
          id: "photo-7",
          title: "Biệt thự Pháp cổ kính giữa vườn hoa",
          album: "kien-truc",
          albumLabel: "7. Kiến trúc Đà Lạt",
          sourceType: "real",
          date: "2026-04-12",
          allowDownload: true,
          img: IMG.villaFlower,
          desc: "Nét kiến trúc cổ điển vượt thời gian nằm bình yên dưới bóng thông già."
        },
        {
          id: "photo-8",
          title: "Ánh đèn vàng ấm áp bên hiên gỗ khi phố núi lên đèn",
          album: "ve-dem",
          albumLabel: "8. Đà Lạt về đêm",
          sourceType: "real",
          date: "2026-05-01",
          allowDownload: true,
          img: IMG.pineCafe,
          desc: "Không gian quán gỗ lung linh ánh đèn lồng vàng ấm nhìn ra thung lũng sương đêm."
        },
        {
          id: "photo-9",
          title: "Sớm mai trên đồi chè Cầu Đất trăm năm",
          album: "ky-uc",
          albumLabel: "9. Đà Lạt trong ký ức",
          sourceType: "real",
          date: "2026-05-20",
          allowDownload: true,
          img: IMG.teaHills,
          desc: "Ký ức trong trẻo về những buổi sáng thức dậy thật sớm đón sương trên đồi chè xanh."
        },
        {
          id: "photo-10",
          title: "Giấc mơ Đà Lạt bồng bềnh trên mây và giai điệu (Tranh AI)",
          album: "nghe-thuat-ai",
          albumLabel: "10. Đà Lạt qua nghệ thuật AI",
          sourceType: "ai",
          date: "2026-06-01",
          allowDownload: true,
          img: IMG.aiFantasy,
          desc: "[Tác phẩm sáng tạo bằng AI - Không phải ảnh chụp địa điểm thực tế]: Tái hiện cảm xúc Đà Lạt mộng mơ giữa mây vàng, hoa nở và những khuông nhạc bay bổng của An Nhiên AI."
        }
      ];

      // 7. DỮ LIỆU KÝ ỨC ĐÀ LẠT (NHẬT KÝ NGHỆ THUẬT - GHI RÕ BẢN MẪU MINH HỌA)
      const DEFAULT_MEMORIES = [
        {
          id: "mem-1",
          title: "Một buổi sáng bên Hồ Xuân Hương nghe sương kể chuyện",
          date: "12/08/2026",
          category: "Buổi sáng Hồ Xuân Hương",
          isSample: true,
          img: IMG.xuanHuong,
          excerpt: "[Bản mẫu minh họa bố cục]: Có những buổi sớm Đà Lạt tĩnh lặng đến mức ta nghe rõ tiếng giọt sương rơi khẽ trên tán lá thông già ven hồ...",
          content: "<p><strong>[Đoạn mẫu minh họa giao diện - Chờ tác giả Trịnh Thị An cập nhật kỷ niệm cá nhân]:</strong></p><p>Có những buổi sớm Đà Lạt tĩnh lặng đến mức ta nghe rõ từng nhịp thở của mặt hồ. Khi phố xá còn chìm trong giấc ngủ, mặt Hồ Xuân Hương khoác lên mình tấm khăn voan sương mù mỏng mảnh. Bước chậm trên con đường ven hồ, hơi lạnh se sắt chạm vào đôi bàn tay nhưng lòng lại ấm lạ kỳ.</p><p>Đà Lạt dạy con người ta biết sống chậm lại, biết trân quý một tia nắng ấm đầu ngày và mỉm cười với những điều giản dị nhất.</p>"
        },
        {
          id: "mem-2",
          title: "Chiều mưa phố núi và tách cà phê ấm bên hiên gỗ",
          date: "05/09/2026",
          category: "Những chiều mưa phố núi",
          isSample: true,
          img: IMG.pineCafe,
          excerpt: "[Bản mẫu minh họa bố cục]: Mưa Đà Lạt không ồn ào vội vã, mà rả rích như một bản tình ca xưa cũ gọi về bao nỗi niềm thương nhớ...",
          content: "<p><strong>[Đoạn mẫu minh họa giao diện - Chờ tác giả Trịnh Thị An cập nhật kỷ niệm cá nhân]:</strong></p><p>Mưa Đà Lạt có một vẻ đẹp rất riêng. Giữa buổi chiều sương giăng, ngồi bên hiên quán gỗ nhỏ nhìn ra thung lũng thông mờ ảo, hương cà phê nóng quyện cùng mùi đất ẩm sau mưa tạo nên một miền ký ức không thể nào quên.</p><p>Chính từ những buổi chiều mưa như thế, những giai điệu của <em>An Nhiên AI Music</em> đã được ấp ủ để sẻ chia sự bình yên đến mọi người.</p>"
        },
        {
          id: "mem-3",
          title: "Thơ: Gửi Lại Đà Lạt Một Nhánh Thông Xanh",
          date: "20/10/2026",
          category: "Thơ Đà Lạt",
          isSample: true,
          img: IMG.cherrySlope,
          excerpt: "[Bản mẫu minh họa bố cục]: Ta về gửi lại phố sương / Nắng vàng con dốc, vấn vương câu thề / Mai sau dù có bộn bề / Trong tim vẫn giữ lối về An Nhiên...",
          content: "<p><strong>[Bài thơ mẫu minh họa bố cục - Chờ tác giả Trịnh Thị An thay bằng sáng tác riêng]:</strong></p><blockquote class='italic border-l-4 border-sun pl-4 my-3'>Ta về gửi lại phố sương<br/>Nắng vàng con dốc, vấn vương câu thề<br/>Rừng thông hát khúc vỗ về<br/>Trong tim vẫn giữ lối về An Nhiên.<br/><br/>Một Đà Lạt để ngắm nhìn<br/>Một Đà Lạt để giữ gìn thương yêu.</blockquote>"
        }
      ];

      // 8. DỮ LIỆU CHUYÊN MỤC GIAI ĐIỆU AN NHIÊN (AN NHIÊN AI MUSIC - TTA)
      const DEFAULT_MUSIC_MVS = [
        {
          id: "mv-1",
          title: "Đà Lạt Chiều Mưa Chạm Vào Ký Ức",
          album: "chieu-mua",
          albumLabel: "Album: Đà Lạt chiều mưa",
          style: "Ballad Trữ Tình • Acoustic Guitar & Violin",
          cover: IMG.summerRain,
          youtubeUrl: "https://youtube.com/@annhienaimusictta?si=5pXWSG77iLaLYkJh",
          desc: "Giai điệu dịu dàng như tiếng mưa rơi trên mái ngói cổ Đà Lạt, đưa người nghe trở về những kỷ niệm êm đềm, sâu lắng của tuổi trẻ và tình yêu."
        },
        {
          id: "mv-2",
          title: "Nắng Cuối Thu Trên Đồi Cỏ Hồng Phố Núi",
          album: "cuoi-thu",
          albumLabel: "Album: Đà Lạt cuối thu",
          style: "Indie Pop & Lãng Mạn • Piano & Cello",
          cover: IMG.autumnGrass,
          youtubeUrl: "https://youtube.com/@annhienaimusictta?si=5pXWSG77iLaLYkJh",
          desc: "Khúc ca ấm áp viết về buổi chiều cuối thu Đà Lạt khi nắng vàng như mật trải dài trên đồi cỏ hồng và gió thông thổi nhẹ."
        },
        {
          id: "mv-3",
          title: "Bình Minh Trên Đồi Thông – Khúc Ca An Nhiên",
          album: "binh-minh",
          albumLabel: "Album: Bình minh trên đồi thông",
          style: "Healing Acoustic & Thiên Nhiên Chữa Lành",
          cover: IMG.pineCloud,
          youtubeUrl: "https://youtube.com/@annhienaimusictta?si=5pXWSG77iLaLYkJh",
          desc: "Tác phẩm âm nhạc truyền cảm hứng tích cực, mở ra khung cảnh bình minh trong trẻo giữa biển mây và rừng thông xanh ngát."
        },
        {
          id: "mv-4",
          title: "Một Đà Lạt Để Thương, Một Đà Lạt Để Nhớ",
          album: "mua-thuong-nho",
          albumLabel: "Album: Những mùa thương nhớ",
          style: "Trữ Tình Quê Hương & Gia Đình Sâu Lắng",
          cover: IMG.cherrySlope,
          youtubeUrl: "https://youtube.com/@annhienaimusictta?si=5pXWSG77iLaLYkJh",
          desc: "Ca khúc chủ đề mang thông điệp thương hiệu của tác giả Trịnh Thị An – nơi âm nhạc kết nối tình yêu thiên nhiên, gia đình và ký ức Đà Lạt."
        }
      ];

      // 9. DỮ LIỆU 8 BÀI CẨM NANG DU LỊCH ĐÀ LẠT
      const GUIDES_DATA = [
        {
          id: "guide-1",
          title: "Đi Đà Lạt mùa nào đẹp?",
          type: "cam-hung",
          typeLabel: "Truyền cảm hứng & Khí hậu",
          summary: "Bốn mùa Đà Lạt đều có vẻ đẹp riêng: Xuân ngắm hoa, Hạ nghe mưa, Thu săn nắng vàng, Đông ngắm biển mây.",
          detail: "<p>Đà Lạt đẹp quanh năm tùy theo cảm xúc bạn tìm kiếm. Mùa khô (thường từ cuối năm đến đầu mùa xuân năm sau) thuận lợi cho việc dạo bộ, săn mây và ngắm hoa. Mùa mưa (các tháng mùa hạ) lại mang nét lãng mạn, trầm mặc cho những ai thích ngồi quán cà phê ấm áp ngắm mưa chiều.</p><p><em>Lưu ý thực tế:</em> Trước chuyến đi 3–5 ngày, bạn nên xem dự báo thời tiết để chuẩn bị trang phục phù hợp nhất.</p>"
        },
        {
          id: "guide-2",
          title: "Gợi ý lịch trình 2 ngày 1 đêm",
          type: "thuc-te",
          typeLabel: "Thông tin thực tế",
          summary: "Lịch trình gọn nhẹ cho dịp cuối tuần: tập trung khu vực trung tâm Hồ Xuân Hương, Ga Đà Lạt và Cầu Đất.",
          detail: "<p><strong>Ngày 1:</strong> Sáng dạo Hồ Xuân Hương, thăm Nhà thờ Chính tòa và Ga Đà Lạt. Chiều ghé một quán cà phê nhìn ra rừng thông và ăn tối ấm cúng tại trung tâm.</p><p><strong>Ngày 2:</strong> Sáng sớm đón bình minh tại Đồi chè Cầu Đất, thưởng thức cà phê sáng, mua quà nông sản sấy khô và thong thả trở về.</p>"
        },
        {
          id: "guide-3",
          title: "Gợi ý lịch trình 3 ngày 2 đêm",
          type: "thuc-te",
          typeLabel: "Thông tin thực tế",
          summary: "Nhịp độ vừa phải, kết hợp khám phá trung tâm thành phố, Hồ Tuyền Lâm và ngoại ô Trại Mát – Cầu Đất.",
          detail: "<p><strong>Ngày 1:</strong> Nhận phòng nghỉ ngơi, chiều dạo Vườn hoa Thành phố và Hồ Xuân Hương.</p><p><strong>Ngày 2:</strong> Sáng khám phá Hồ Tuyền Lâm và rừng thông; chiều trải nghiệm tuyến tàu cổ Ga Đà Lạt – Trại Mát.</p><p><strong>Ngày 3:</strong> Sáng săn mây Cầu Đất hoặc dạo chợ Đà Lạt mua đặc sản trà, mứt trước khi khởi hành về.</p>"
        },
        {
          id: "guide-4",
          title: "Những nơi thích hợp để chụp ảnh",
          type: "cam-hung",
          typeLabel: "Truyền cảm hứng nhiếp ảnh",
          summary: "Kinh nghiệm chọn khung giờ vàng (Golden Hour) lúc bình minh và hoàng hôn để có bức ảnh giàu chất điện ảnh.",
          detail: "<p>Ánh sáng đẹp nhất tại Đà Lạt là từ <strong>5:45 – 7:30 sáng</strong> và <strong>16:15 – 17:30 chiều</strong>. Lúc này nắng xiên dịu nhẹ giúp tôn lên làn sương mỏng trên mặt Hồ Xuân Hương, rừng thông và các con dốc cổ kính mà không bị chói gắt.</p>"
        },
        {
          id: "guide-5",
          title: "Những trải nghiệm nên thử ở Đà Lạt",
          type: "cam-hung",
          typeLabel: "Truyền cảm hứng",
          summary: "Đi bộ quanh hồ lúc sương sớm, ngồi tàu lửa cổ, thưởng thức sữa đậu nành nóng và nghe nhạc Acoustic.",
          detail: "<p>Đừng vội chạy theo quá nhiều điểm check-in. Hãy thử dậy sớm đi bộ dưới hàng thông ven Hồ Xuân Hương, ngồi nhâm nhi ly sữa đậu nành nóng trong tiết trời se lạnh, hoặc lắng nghe những bản tình ca nhẹ nhàng.</p>"
        },
        {
          id: "guide-6",
          title: "Chuẩn bị trang phục và hành lý",
          type: "thuc-te",
          typeLabel: "Thông tin thực tế",
          summary: "Nguyên tắc mặc nhiều lớp (layering), khăn choàng cổ, giày đế bệt êm chân và ô gấp gọn.",
          detail: "<p>Đà Lạt có thể có 4 mùa trong một ngày. Bạn nên mang theo áo khoác giữ ấm cho sáng sớm và tối muộn, khăn choàng cổ, một đôi giày đế mềm chống trơn trượt để đi dốc thoải mái, cùng trang phục tông màu kem, nâu gỗ, xanh rêu hoặc vàng nhạt rất hợp với cảnh sắc thiên nhiên.</p>"
        },
        {
          id: "guide-7",
          title: "Kinh nghiệm di chuyển an toàn",
          type: "thuc-te",
          typeLabel: "Thông tin thực tế",
          summary: "Lưu ý khi đi đường đèo dốc, sương mù và lựa chọn taxi/xe ô tô riêng an toàn.",
          detail: "<p>Địa hình Đà Lạt nhiều dốc cao và cua gấp, đặc biệt có sương mù vào sáng sớm hoặc chiều mưa. Nếu đi cùng gia đình hoặc không quen chạy xe đường đốc, bạn nên ưu tiên sử dụng taxi hoặc thuê xe ô tô có tài xế địa phương am hiểu cung đường.</p>"
        },
        {
          id: "guide-8",
          title: "Gợi ý khám phá Đà Lạt cho người trung niên",
          type: "trung-nien",
          typeLabel: "Chuyên biệt cho người trung niên",
          summary: "Nhịp độ thong thả (tối đa 2–3 điểm/ngày), ưu tiên điểm bằng phẳng, giữ ấm cổ & bàn chân, ẩm thực thanh đạm.",
          detail: "<p><strong>1. Nhịp độ thư thái:</strong> Chỉ nên xếp 1 điểm buổi sáng và 1 điểm buổi chiều, dành thời gian nghỉ trưa tại nơi lưu trú.</p><p><strong>2. Chọn điểm ít bậc thang:</strong> Ưu tiên dạo ven Hồ Xuân Hương, Vườn hoa Thành phố, Ga Đà Lạt, Hồ Tuyền Lâm và các quán cà phê sân vườn bằng phẳng.</p><p><strong>3. Giữ gìn sức khỏe:</strong> Luôn mang theo khăn choàng ấm, bình giữ nhiệt đựng trà gừng/nước ấm và tránh ra ngoài quá sớm khi sương lạnh còn dày.</p>"
        }
      ];

      // 10. DỮ LIỆU 5 LỊCH TRÌNH TRẢI NGHIỆM THAM KHẢO
      const ITINERARIES_DATA = [
        {
          id: "iti-1",
          name: "1. Một ngày khám phá Đà Lạt",
          duration: "Thời lượng dự kiến: 1 ngày (7:00 – 20:00)",
          places: "Hồ Xuân Hương → Ga Đà Lạt → Nhà thờ Chính tòa → Cà phê rừng thông → Chợ đêm",
          route: "Sáng dạo bộ ngắm sương Hồ Xuân Hương, tham quan Ga Đà Lạt và Nhà thờ Con Gà. Trưa thưởng thức ẩm thực địa phương và nghỉ ngơi. Chiều ngắm hoàng hôn tại quán cà phê đồi thông, tối dạo phố thưởng thức sữa đậu nành nóng.",
          note: "Lưu ý thực tế: Các điểm nằm gần nhau ở trung tâm nên di chuyển rất nhẹ nhàng, ít tốn thời gian.",
          img: IMG.xuanHuong
        },
        {
          id: "iti-2",
          name: "2. Đà Lạt dành cho cặp đôi",
          duration: "Thời lượng dự kiến: 2 ngày 1 đêm",
          places: "Đồi chè Cầu Đất → Thung lũng Tình Yêu → Hồ Tuyền Lâm → Biệt thự cổ",
          route: "Đón bình minh cùng nhau trên đồi chè xanh, dạo bước dưới tán thông Hồ Tuyền Lâm, chụp ảnh kỷ niệm bên biệt thự Pháp cổ và thưởng thức bữa tối dưới ánh nến ấm áp.",
          note: "Lưu ý thực tế: Nên chuẩn bị trang phục đồng điệu tông màu kem, nâu gỗ hoặc xanh thông để lưu giữ bộ ảnh kỷ niệm đẹp.",
          img: IMG.cherrySlope
        },
        {
          id: "iti-3",
          name: "3. Đà Lạt dành cho gia đình & người lớn tuổi",
          duration: "Thời lượng dự kiến: 3 ngày 2 đêm (Nhịp độ thong thả)",
          places: "Vườn hoa Thành phố → Hồ Xuân Hương → Tuyến tàu cổ Trại Mát → Hồ Tuyền Lâm",
          route: "Thiết kế lối đi bằng phẳng, di chuyển bằng ô tô/taxi, kết hợp trải nghiệm ngồi toa tàu cổ ngắm cảnh phố núi mà không phải leo dốc nhiều.",
          note: "Lưu ý thực tế: Luôn mang theo áo ấm, trà nóng và dành thời gian nghỉ trưa đầy đủ cho ông bà, cha mẹ.",
          img: IMG.villaFlower
        },
        {
          id: "iti-4",
          name: "4. Hành trình săn ảnh thiên nhiên",
          duration: "Thời lượng dự kiến: 2 ngày (Khung giờ Bình minh & Hoàng hôn)",
          places: "Đồi Thiên Phúc Đức → Đồi Cỏ Hồng → Đồi chè Cầu Đất → Hồ Xuân Hương",
          route: "Tập trung vào hai khung giờ vàng (5:15 – 7:30 và 16:00 – 17:45) để bắt trọn tia nắng xuyên rừng thông, biển mây Cầu Đất và mặt hồ phản chiếu.",
          note: "Lưu ý thực tế: Kiểm tra độ ẩm và hướng gió chiều hôm trước; mang theo giày chống thấm sương sớm.",
          img: IMG.pineCloud
        },
        {
          id: "iti-5",
          name: "5. Một ngày sống chậm giữa phố núi",
          duration: "Thời lượng dự kiến: 1 ngày tự do, không vội vã",
          places: "Homestay rừng thông → Quán cà phê gỗ cổ điển → Con dốc nhỏ → Nghe nhạc An Nhiên",
          route: "Không đặt báo thức sớm, thức dậy đọc sách bên hiên gỗ, dành trọn buổi chiều trong một quán cà phê yên tĩnh nghe giai điệu An Nhiên AI Music và viết nhật ký.",
          note: "Lưu ý thực tế: Phù hợp khi bạn cần nạp lại năng lượng tinh thần và tìm kiếm sự tĩnh lặng.",
          img: IMG.pineCafe
        }
      ];

      // 11. DỮ LIỆU LƯU BÚT MẪU
      const DEFAULT_GUESTBOOK = [
        {
          name: "Cô Minh Nguyệt (Hà Nội)",
          date: "20/10/2026",
          message: "Giao diện trang nhã, chữ rõ ràng dễ đọc. Ngắm những bức ảnh Hồ Xuân Hương và nghe giai điệu của An Nhiên AI Music thấy lòng bình yên quá!"
        },
        {
          name: "Anh Hoàng Nam (TP.HCM)",
          date: "22/10/2026",
          message: "Cảm ơn chị Trịnh Thị An đã tạo nên một không gian lưu giữ ký ức Đà Lạt thật chỉn chu và giàu cảm xúc."
        }
      ];

      // ================= HỆ THỐNG LƯU TRỮ BỀN VỮNG (LOCALSTORAGE + INDEXEDDB) =================
      const STORAGE_KEY = "AN_NHIEN_DALAT_CMS_V1";

      let appState = {
        gallery: DEFAULT_GALLERY_ITEMS.slice(),
        memories: DEFAULT_MEMORIES.slice(),
        mvs: DEFAULT_MUSIC_MVS.slice(),
        guestbook: DEFAULT_GUESTBOOK.slice(),
        authorStory: "“[Không gian dành riêng cho câu chuyện cá nhân của chị Trịnh Thị An]: Tại đây, chị có thể nhấn nút 'Chỉnh sửa lời tâm sự' để viết thêm về kỷ niệm lần đầu đặt chân đến Đà Lạt, cơ duyên đến với âm nhạc AI và những điều chị mong muốn gửi gắm tới bạn bè, người thân.”",
        authorAvatar: IMG.authorAvatar
      };

      function loadStateFromStorage() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              if (Array.isArray(parsed.gallery) && parsed.gallery.length) appState.gallery = parsed.gallery;
              if (Array.isArray(parsed.memories) && parsed.memories.length) appState.memories = parsed.memories;
              if (Array.isArray(parsed.mvs) && parsed.mvs.length) appState.mvs = parsed.mvs;
              if (Array.isArray(parsed.guestbook) && parsed.guestbook.length) appState.guestbook = parsed.guestbook;
              if (parsed.authorStory) appState.authorStory = parsed.authorStory;
              if (parsed.authorAvatar) appState.authorAvatar = parsed.authorAvatar;
            }
          }
        } catch (err) {
          console.warn("Không thể đọc localStorage trong môi trường sandbox:", err);
        }
      }

      function saveStateToStorage() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
        } catch (err) {
          console.warn("Lưu trữ localStorage vượt dung lượng hoặc bị giới hạn:", err);
        }
      }

      function showToast(msg) {
        const toast = document.getElementById("app-toast");
        const text = document.getElementById("app-toast-text");
        if (!toast || !text) return;
        text.textContent = msg;
        toast.classList.remove("hidden");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 3400);
      }

      // ================= KHỞI TẠO BANNER SLIDESHOW =================
      let currentHeroIndex = 0;
      let heroInterval = null;
      let isHeroPaused = false;

      function renderHeroSlides() {
        const container = document.getElementById("hero-slides-container");
        const dotsContainer = document.getElementById("hero-dots");
        if (!container || !dotsContainer) return;

        container.innerHTML = HERO_SLIDES.map((s, idx) => `
          <div class="hero-slide-item absolute inset-0 transition-opacity duration-1000 ${idx === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}" data-index="${idx}">
            <img src="${s.img}" alt="${s.badge}" class="w-full h-full object-cover" />
          </div>
        `).join("");

        dotsContainer.innerHTML = HERO_SLIDES.map((_, idx) => `
          <button type="button" data-hero-dot="${idx}" class="w-3 h-3 rounded-full transition ${idx === 0 ? 'bg-sun scale-125' : 'bg-mist/40 hover:bg-mist/70'}" aria-label="Chuyển tới ảnh ${idx + 1}"></button>
        `).join("");

        dotsContainer.querySelectorAll("[data-hero-dot]").forEach(btn => {
          btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-hero-dot"), 10);
            goToHeroSlide(idx);
          });
        });
      }

      function goToHeroSlide(index) {
        currentHeroIndex = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
        const slides = document.querySelectorAll(".hero-slide-item");
        slides.forEach((el, idx) => {
          if (idx === currentHeroIndex) {
            el.classList.remove("opacity-0", "pointer-events-none");
            el.classList.add("opacity-100");
          } else {
            el.classList.remove("opacity-100");
            el.classList.add("opacity-0", "pointer-events-none");
          }
        });

        const dots = document.querySelectorAll("[data-hero-dot]");
        dots.forEach((d, idx) => {
          d.className = `w-3 h-3 rounded-full transition ${idx === currentHeroIndex ? 'bg-sun scale-125' : 'bg-mist/40 hover:bg-mist/70'}`;
        });

        const badgeEl = document.getElementById("hero-slide-badge");
        const capEl = document.getElementById("hero-slide-caption");
        if (badgeEl) badgeEl.textContent = HERO_SLIDES[currentHeroIndex].badge;
        if (capEl) capEl.textContent = HERO_SLIDES[currentHeroIndex].caption;
      }

      function startHeroAutoplay() {
        if (heroInterval) clearInterval(heroInterval);
        heroInterval = setInterval(() => {
          if (!isHeroPaused && !document.body.classList.contains("reduce-motion")) {
            goToHeroSlide(currentHeroIndex + 1);
          }
        }, 5500);
      }

      // ================= RENDER BỐN MÙA ĐÀ LẠT =================
      let currentSeasonKey = "xuan";

      function renderSeasonPanel(seasonKey) {
        currentSeasonKey = seasonKey;
        const data = SEASONS_DATA[seasonKey];
        const panel = document.getElementById("season-detail-panel");
        if (!data || !panel) return;

        panel.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden border-2 border-sun shadow-md img-zoom-container h-72 sm:h-96 bg-pine-dark">
                <img src="${data.mainImg}" alt="${data.name}" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div class="grid grid-cols-3 gap-3 mt-3">
                ${data.gallery.map(g => `
                  <div class="rounded-xl overflow-hidden border border-sage/50 h-24 bg-pine-dark relative group cursor-pointer season-mini-img" data-img="${g.img}" data-title="${g.title}">
                    <img src="${g.img}" alt="${g.title}" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
                    <span class="absolute inset-x-0 bottom-0 bg-pine-dark/75 text-mist text-[11px] px-1.5 py-0.5 truncate">${g.title}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="lg:col-span-6 space-y-4">
              <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-pine">${data.name}</h3>
              <p class="text-base text-[#2C3E35] leading-relaxed">${data.intro}</p>
              <div class="bg-mist p-4 rounded-2xl border border-sage/40 space-y-2 text-sm">
                <p><strong class="text-pine">🌤️ Đặc điểm thời tiết:</strong> ${data.weather}</p>
                <p><strong class="text-pine">🌺 Mùa hoa &amp; Cảnh sắc:</strong> ${data.flowers}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-wood block mb-2">Trải nghiệm gợi ý trong mùa:</span>
                <ul class="space-y-2 text-sm sm:text-base text-[#2C3E35]">
                  ${data.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-pine font-bold">✦</span><span>${h}</span></li>`).join("")}
                </ul>
              </div>
              <div class="pt-2 flex flex-wrap gap-3">
                <a href="#thu-vien-anh" class="px-5 py-2.5 rounded-full bg-pine text-mist font-semibold text-sm hover:bg-pine-light transition">Xem bộ sưu tập ảnh trong Thư viện →</a>
              </div>
            </div>
          </div>
        `;

        panel.querySelectorAll(".season-mini-img").forEach(el => {
          el.addEventListener("click", () => {
            openSimpleLightbox(el.getAttribute("data-img"), el.getAttribute("data-title"), data.intro, "Bộ sưu tập Bốn mùa Đà Lạt");
          });
        });
      }

      // ================= RENDER 10 ĐỊA ĐIỂM KHÔNG THỂ QUÊN =================
      let currentPlaceFilter = "all";

      function renderPlacesGrid() {
        const grid = document.getElementById("places-grid");
        if (!grid) return;

        const filtered = currentPlaceFilter === "all"
          ? PLACES_DATA
          : PLACES_DATA.filter(p => p.category === currentPlaceFilter);

        grid.innerHTML = filtered.map(p => `
          <article class="bg-mist rounded-3xl overflow-hidden border border-sage/40 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div class="relative h-56 img-zoom-container bg-pine-dark">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-pine-dark/85 text-sun text-xs font-semibold">📍 Tọa độ xác thực</span>
              </div>
              <div class="p-6 space-y-2.5">
                <h3 class="font-editorial text-2xl font-bold text-pine">${p.name}</h3>
                <p class="text-sm text-[#2C3E35]">${p.shortDesc}</p>
                <div class="pt-2 text-xs sm:text-sm text-wood space-y-1 border-t border-sage/30">
                  <p><strong class="text-pine">✨ Điểm đặc sắc:</strong> ${p.highlight}</p>
                  <p><strong class="text-pine">⏰ Thời điểm gợi ý:</strong> ${p.bestTime}</p>
                </div>
              </div>
            </div>
            <div class="px-6 pb-5 pt-2 flex items-center justify-between gap-2">
              <button type="button" data-place-detail="${p.id}" class="px-4 py-2 rounded-xl bg-pine text-mist text-xs sm:text-sm font-semibold hover:bg-pine-light transition">Xem chi tiết</button>
              <button type="button" data-focus-map="${p.id}" class="px-3.5 py-2 rounded-xl bg-cream text-pine border border-sun/60 text-xs sm:text-sm font-semibold hover:bg-sun/30 transition">🗺️ Xem trên bản đồ</button>
            </div>
          </article>
        `).join("");

        grid.querySelectorAll("[data-place-detail]").forEach(btn => {
          btn.addEventListener("click", () => {
            const place = PLACES_DATA.find(x => x.id === btn.getAttribute("data-place-detail"));
            if (!place) return;
            openDetailModal({
              title: place.name,
              badge: "Địa điểm không thể quên",
              meta: `Tọa độ GPS: ${place.lat}, ${place.lng} • Thời điểm đẹp: ${place.bestTime}`,
              img: place.img,
              bodyHtml: `
                <p>${place.shortDesc}</p>
                <p><strong>Điểm đặc sắc:</strong> ${place.highlight}</p>
                <p><strong>Gợi ý thời điểm tham quan:</strong> ${place.bestTime}</p>
                <p class="text-xs text-wood italic">Nguyên tắc minh bạch: Website chỉ cung cấp tọa độ địa lý xác thực, không tự tạo giá vé hay số điện thoại chưa kiểm chứng.</p>
                <div class="pt-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sun text-pine-dark font-bold text-sm">📍 Mở chỉ đường Google Maps</a>
                </div>
              `
            });
          });
        });

        grid.querySelectorAll("[data-focus-map]").forEach(btn => {
          btn.addEventListener("click", () => {
            const place = PLACES_DATA.find(x => x.id === btn.getAttribute("data-focus-map"));
            if (!place) return;
            const mapSec = document.getElementById("ban-do");
            if (mapSec) mapSec.scrollIntoView({ behavior: "smooth" });
            focusMapLocation(place.lat, place.lng, place.name);
          });
        });
      }

      // ================= KHỞI TẠO BẢN ĐỒ TƯƠNG TÁC LEAFLET =================
      let leafletMap = null;
      let mapMarkers = [];

      const ALL_MAP_POINTS = [
        ...PLACES_DATA.map(p => ({
          id: p.id,
          name: p.name,
          cat: p.mapCat,
          catLabel: "Điểm tham quan & Phong cảnh",
          desc: p.shortDesc,
          img: p.img,
          lat: p.lat,
          lng: p.lng
        })),
        ...CAFES_DATA.slice(0, 3).map(c => ({
          id: c.id,
          name: c.name,
          cat: "ca-phe",
          catLabel: "Khu vực Quán cà phê",
          desc: `${c.area} – ${c.style}`,
          img: c.img,
          lat: c.lat,
          lng: c.lng
        })),
        {
          id: "map-stay-1",
          name: "Khu vực Homestay Rừng Thông & Biệt Thự Cổ",
          cat: "homestay",
          catLabel: "Khu vực Lưu trú",
          desc: "Tuyến đường Trần Hưng Đạo – Đặng Thái Thân quy tụ nhiều biệt thự cổ và homestay rừng thông.",
          img: IMG.villaFlower,
          lat: 11.9345,
          lng: 108.4472
        }
      ];

      function initDalatMap() {
        const mapEl = document.getElementById("dalat-leaflet-map");
        if (!mapEl || typeof L === "undefined") return;

        leafletMap = L.map("dalat-leaflet-map").setView([11.9404, 108.4450], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "&copy; OpenStreetMap contributors | An Nhiên – Đà Lạt Mộng Mơ"
        }).addTo(leafletMap);

        renderMapMarkers("all");
      }

      function renderMapMarkers(catFilter) {
        const listEl = document.getElementById("map-locations-list");
        const points = catFilter === "all"
          ? ALL_MAP_POINTS
          : ALL_MAP_POINTS.filter(pt => pt.cat === catFilter);

        if (leafletMap) {
          mapMarkers.forEach(m => leafletMap.removeLayer(m));
          mapMarkers = [];

          points.forEach(pt => {
            const marker = L.marker([pt.lat, pt.lng]).addTo(leafletMap);
            const popupHtml = `
              <div style="width:210px">
                <img src="${pt.img}" alt="${pt.name}" style="width:100%;height:105px;object-fit:cover;border-radius:8px;margin-bottom:6px;" />
                <strong style="color:#244A3B;font-size:14px;display:block;">${pt.name}</strong>
                <span style="color:#745843;font-size:11px;display:block;margin-bottom:4px;">${pt.catLabel}</span>
                <p style="font-size:12px;margin:0 0 6px 0;">${pt.desc}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=${pt.lat},${pt.lng}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:4px 10px;background:#244A3B;color:#F6F7F2;border-radius:6px;font-size:11px;text-decoration:none;font-weight:600;">📍 Mở chỉ đường Google Maps</a>
              </div>
            `;
            marker.bindPopup(popupHtml);
            mapMarkers.push(marker);
          });
        }

        if (listEl) {
          listEl.innerHTML = points.map(pt => `
            <button type="button" data-lat="${pt.lat}" data-lng="${pt.lng}" data-name="${pt.name}" class="w-full text-left p-3 rounded-2xl bg-mist hover:bg-sun/25 border border-sage/40 transition flex items-center gap-3">
              <img src="${pt.img}" alt="${pt.name}" class="w-12 h-12 rounded-xl object-cover shrink-0" loading="lazy" />
              <div class="min-w-0 flex-1">
                <span class="font-bold text-sm text-pine block truncate">${pt.name}</span>
                <span class="text-xs text-wood block truncate">${pt.catLabel}</span>
              </div>
            </button>
          `).join("");

          listEl.querySelectorAll("button[data-lat]").forEach(btn => {
            btn.addEventListener("click", () => {
              const lat = parseFloat(btn.getAttribute("data-lat"));
              const lng = parseFloat(btn.getAttribute("data-lng"));
              focusMapLocation(lat, lng, btn.getAttribute("data-name"));
            });
          });
        }
      }

      function focusMapLocation(lat, lng, name) {
        if (!leafletMap) return;
        leafletMap.setView([lat, lng], 15, { animate: true });
        mapMarkers.forEach(m => {
          const pos = m.getLatLng();
          if (Math.abs(pos.lat - lat) < 0.0005 && Math.abs(pos.lng - lng) < 0.0005) {
            m.openPopup();
          }
        });
      }

      // ================= RENDER THƯ VIỆN ẢNH ĐÀ LẠT & LIGHTBOX =================
      let activeAlbumId = "all";
      let activeSourceType = "all";
      let activeSearchText = "";
      let activeSortBy = "newest";
      let currentLightboxList = [];
      let currentLightboxIndex = 0;
      let isLightboxZoomed = false;

      function renderGalleryAlbumTabs() {
        const container = document.getElementById("gallery-album-tabs");
        if (!container) return;
        container.innerHTML = ALBUM_CATEGORIES.map(a => `
          <button type="button" data-album-id="${a.id}" class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${a.id === activeAlbumId ? 'bg-sun text-pine-dark font-bold shadow' : 'bg-pine text-mist/90 hover:bg-pine-light border border-sage/30'}">
            ${a.name}
          </button>
        `).join("");

        container.querySelectorAll("[data-album-id]").forEach(btn => {
          btn.addEventListener("click", () => {
            activeAlbumId = btn.getAttribute("data-album-id");
            renderGalleryAlbumTabs();
            renderGalleryGrid();
          });
        });
      }

      function getFilteredGallery() {
        return appState.gallery
          .filter(item => {
            if (activeAlbumId !== "all" && item.album !== activeAlbumId) return false;
            if (activeSourceType !== "all" && item.sourceType !== activeSourceType) return false;
            if (activeSearchText) {
              const q = activeSearchText.toLowerCase();
              const matchTitle = item.title.toLowerCase().includes(q);
              const matchDesc = (item.desc || "").toLowerCase().includes(q);
              const matchAlbum = (item.albumLabel || "").toLowerCase().includes(q);
              if (!matchTitle && !matchDesc && !matchAlbum) return false;
            }
            return true;
          })
          .sort((a, b) => {
            if (activeSortBy === "newest") return (b.date || "").localeCompare(a.date || "");
            if (activeSortBy === "oldest") return (a.date || "").localeCompare(b.date || "");
            return a.title.localeCompare(b.title, "vi");
          });
      }

      function renderGalleryGrid() {
        const grid = document.getElementById("gallery-grid");
        const statEl = document.getElementById("stat-total-photos");
        if (statEl) statEl.textContent = `${appState.gallery.length} Tác Phẩm Ảnh`;
        if (!grid) return;

        currentLightboxList = getFilteredGallery();

        if (currentLightboxList.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-pine/50 rounded-3xl border border-sage/30">
              <p class="text-lg text-cream mb-3">Không tìm thấy bức ảnh nào khớp với bộ lọc hiện tại.</p>
              <button id="btn-reset-gallery-filter" type="button" class="px-5 py-2 rounded-full bg-sun text-pine-dark font-bold text-sm">Xem lại tất cả ảnh</button>
            </div>
          `;
          const resetBtn = document.getElementById("btn-reset-gallery-filter");
          if (resetBtn) {
            resetBtn.addEventListener("click", () => {
              activeAlbumId = "all";
              activeSourceType = "all";
              activeSearchText = "";
              const searchInput = document.getElementById("gallery-search-input");
              if (searchInput) searchInput.value = "";
              renderGalleryAlbumTabs();
              renderGalleryGrid();
            });
          }
          return;
        }

        grid.innerHTML = currentLightboxList.map((item, idx) => {
          const isAI = item.sourceType === "ai";
          return `
            <figure class="bg-pine rounded-3xl overflow-hidden border border-sage/30 shadow-lg flex flex-col justify-between group">
              <div>
                <div class="relative h-64 img-zoom-container bg-pine-dark cursor-pointer" data-open-lightbox="${idx}">
                  <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />
                  <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span class="px-3 py-1 rounded-full text-xs font-bold shadow ${isAI ? 'bg-amber-300 text-pine-dark' : 'bg-mist/95 text-pine-dark'}">
                      ${isAI ? '✨ Nghệ thuật AI' : '📷 Ảnh phong cảnh'}
                    </span>
                  </div>
                  <div class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-pine-dark/80 text-mist text-xs">
                    🔍 Nhấn để xem lớn
                  </div>
                </div>
                <figcaption class="p-5 space-y-2">
                  <div class="flex items-center justify-between text-xs text-sun">
                    <span>${item.albumLabel || "Thư viện Đà Lạt"}</span>
                    <span>📅 ${item.date}</span>
                  </div>
                  <h3 class="font-editorial text-xl font-bold text-mist">${item.title}</h3>
                  <p class="text-sm text-mist/80 line-clamp-2">${item.desc}</p>
                </figcaption>
              </div>
              <div class="px-5 pb-4 pt-2 border-t border-sage/20 flex items-center justify-between text-xs">
                <button type="button" data-open-lightbox="${idx}" class="text-sun font-semibold hover:underline">Xem toàn màn hình</button>
                <div class="flex items-center gap-3">
                  <button type="button" data-toggle-dl="${item.id}" class="text-mist/80 hover:text-sun" title="Chủ website bật/tắt quyền tải xuống">
                    ${item.allowDownload ? '⬇️ Cho phép tải' : '🔒 Khóa tải'}
                  </button>
                  <button type="button" data-delete-photo="${item.id}" class="text-red-300 hover:text-red-200" title="Xóa ảnh này">Xóa</button>
                </div>
              </div>
            </figure>
          `;
        }).join("");

        grid.querySelectorAll("[data-open-lightbox]").forEach(el => {
          el.addEventListener("click", () => {
            const idx = parseInt(el.getAttribute("data-open-lightbox"), 10);
            openGalleryLightbox(idx);
          });
        });

        grid.querySelectorAll("[data-toggle-dl]").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-toggle-dl");
            const photo = appState.gallery.find(p => p.id === id);
            if (photo) {
              photo.allowDownload = !photo.allowDownload;
              saveStateToStorage();
              renderGalleryGrid();
              showToast(photo.allowDownload ? "Đã cho phép khách tải bức ảnh này." : "Đã khóa tải xuống cho bức ảnh này.");
            }
          });
        });

        grid.querySelectorAll("[data-delete-photo]").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-delete-photo");
            appState.gallery = appState.gallery.filter(p => p.id !== id);
            saveStateToStorage();
            renderGalleryGrid();
            showToast("Đã ẩn/xóa ảnh khỏi thư viện.");
          });
        });
      }

      function openGalleryLightbox(index) {
        if (!currentLightboxList.length) return;
        currentLightboxIndex = (index + currentLightboxList.length) % currentLightboxList.length;
        const item = currentLightboxList[currentLightboxIndex];
        const modal = document.getElementById("lightbox-modal");
        const img = document.getElementById("lightbox-img");
        const title = document.getElementById("lightbox-title");
        const desc = document.getElementById("lightbox-desc");
        const date = document.getElementById("lightbox-date");
        const badge = document.getElementById("lightbox-badge");
        const album = document.getElementById("lightbox-album");
        const dlBtn = document.getElementById("btn-lightbox-download");

        isLightboxZoomed = false;
        if (img) {
          img.src = item.img;
          img.style.transform = "scale(1)";
        }
        if (title) title.textContent = item.title;
        if (desc) desc.textContent = item.desc;
        if (date) date.textContent = `Ngày tạo: ${item.date}`;
        if (badge) badge.textContent = item.sourceType === "ai" ? "✨ Tác phẩm Nghệ thuật AI" : "📷 Ảnh phong cảnh";
        if (album) album.textContent = item.albumLabel || "";
        if (dlBtn) {
          dlBtn.style.display = item.allowDownload ? "inline-block" : "none";
        }
        if (modal) modal.classList.remove("hidden");
      }

      function openSimpleLightbox(imgSrc, titleText, descText, albumText) {
        currentLightboxList = [{
          img: imgSrc,
          title: titleText,
          desc: descText,
          date: "2026",
          sourceType: "real",
          albumLabel: albumText,
          allowDownload: true
        }];
        openGalleryLightbox(0);
      }

      // ================= RENDER QUÁN CÀ PHÊ & HOMESTAY =================
      let currentCafeFilter = "all";
      function renderCafesGrid() {
        const grid = document.getElementById("cafes-grid");
        if (!grid) return;
        const list = currentCafeFilter === "all" ? CAFES_DATA : CAFES_DATA.filter(c => c.filter === currentCafeFilter);
        grid.innerHTML = list.map(c => `
          <article class="bg-cream/60 rounded-3xl overflow-hidden border border-sage/40 shadow-sm flex flex-col justify-between">
            <div>
              <div class="h-52 img-zoom-container bg-pine-dark">
                <img src="${c.img}" alt="${c.name}" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div class="p-6 space-y-2">
                <span class="text-xs font-bold uppercase text-wood">${c.area}</span>
                <h3 class="font-editorial text-xl font-bold text-pine">${c.name}</h3>
                <p class="text-xs font-medium text-pine bg-mist px-3 py-1 rounded-lg inline-block border border-sage/30">Phong cách: ${c.style}</p>
                <p class="text-sm text-[#2C3E35] pt-1">${c.desc}</p>
              </div>
            </div>
            <div class="px-6 pb-5 pt-2">
              <a href="https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pine hover:text-wood underline">
                📍 Xem khu vực trên Google Maps →
              </a>
            </div>
          </article>
        `).join("");
      }

      let currentStayFilter = "all";
      function renderHomestaysGrid() {
        const grid = document.getElementById("homestays-grid");
        if (!grid) return;
        const list = currentStayFilter === "all" ? HOMESTAYS_DATA : HOMESTAYS_DATA.filter(s => s.filter === currentStayFilter);
        grid.innerHTML = list.map(s => `
          <article class="bg-mist rounded-3xl overflow-hidden border border-sage/40 shadow-sm flex flex-col justify-between">
            <div>
              <div class="h-52 img-zoom-container bg-pine-dark">
                <img src="${s.img}" alt="${s.name}" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div class="p-6 space-y-2">
                <span class="text-xs font-bold uppercase text-wood">${s.area}</span>
                <h3 class="font-editorial text-xl font-bold text-pine">${s.name}</h3>
                <p class="text-sm text-[#2C3E35]">${s.desc}</p>
                <p class="text-xs text-wood pt-2 border-t border-sage/30"><strong>🛋️ Tiện nghi đặc trưng:</strong> ${s.amenities}</p>
              </div>
            </div>
            <div class="px-6 pb-5 pt-2">
              <span class="text-xs italic text-wood">Liên hệ An Nhiên nếu bạn cần tư vấn khu vực lưu trú phù hợp cho gia đình.</span>
            </div>
          </article>
        `).join("");
      }

      // ================= RENDER KÝ ỨC ĐÀ LẠT =================
      function renderMemoriesGrid() {
        const grid = document.getElementById("memories-grid");
        if (!grid) return;

        grid.innerHTML = appState.memories.map(m => `
          <article class="bg-cream/70 rounded-3xl overflow-hidden border border-sun/60 shadow-sm flex flex-col justify-between">
            <div>
              <div class="relative h-52 img-zoom-container bg-pine-dark">
                <img src="${m.img || IMG.xuanHuong}" alt="${m.title}" class="w-full h-full object-cover" loading="lazy" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-pine-dark/85 text-sun text-xs font-semibold">${m.category}</span>
              </div>
              <div class="p-6 space-y-2.5">
                <span class="text-xs text-wood font-medium">📅 Ngày đăng: ${m.date} ${m.isSample ? '• Bản mẫu minh họa' : '• Tác giả: Trịnh Thị An'}</span>
                <h3 class="font-editorial text-xl font-bold text-pine">${m.title}</h3>
                <p class="text-sm text-[#2C3E35] leading-relaxed">${m.excerpt}</p>
              </div>
            </div>
            <div class="px-6 pb-5 pt-2 flex items-center justify-between">
              <button type="button" data-read-memory="${m.id}" class="px-4 py-2 rounded-xl bg-pine text-mist text-xs sm:text-sm font-semibold hover:bg-pine-light transition">Đọc trọn vẹn trang nhật ký</button>
              <button type="button" data-delete-memory="${m.id}" class="text-xs text-wood hover:text-red-700">Xóa</button>
            </div>
          </article>
        `).join("");

        grid.querySelectorAll("[data-read-memory]").forEach(btn => {
          btn.addEventListener("click", () => {
            const mem = appState.memories.find(x => x.id === btn.getAttribute("data-read-memory"));
            if (!mem) return;
            openDetailModal({
              title: mem.title,
              badge: mem.category,
              meta: `Ngày đăng: ${mem.date} • Góc riêng của An Nhiên`,
              img: mem.img || IMG.xuanHuong,
              bodyHtml: mem.content
            });
          });
        });

        grid.querySelectorAll("[data-delete-memory]").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-delete-memory");
            appState.memories = appState.memories.filter(x => x.id !== id);
            saveStateToStorage();
            renderMemoriesGrid();
            showToast("Đã xóa bài viết khỏi Ký ức Đà Lạt.");
          });
        });
      }

      // ================= RENDER CHUYÊN MỤC ÂM NHẠC AN NHIÊN (GIAI ĐIỆU AN NHIÊN) =================
      let currentMusicAlbum = "all";

      function extractYouTubeId(url) {
        if (!url) return null;
        const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]{11}).*/;
        const match = url.match(regExp);
        return match ? match[1] : null;
      }

      function renderMusicGrid() {
        const grid = document.getElementById("music-mv-grid");
        if (!grid) return;

        const list = currentMusicAlbum === "all"
          ? appState.mvs
          : appState.mvs.filter(m => m.album === currentMusicAlbum);

        grid.innerHTML = list.map(m => {
          const ytId = extractYouTubeId(m.youtubeUrl);
          const mediaHtml = ytId
            ? `<div class="relative w-full h-64 sm:h-72 bg-black">
                 <iframe class="w-full h-full" src="https://www.youtube.com/embed/${ytId}" title="${m.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
               </div>`
            : `<div class="relative h-64 sm:h-72 img-zoom-container bg-pine-dark">
                 <img src="${m.cover || IMG.summerRain}" alt="${m.title}" class="w-full h-full object-cover" loading="lazy" />
                 <a href="${m.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-pine-dark/40 hover:bg-pine-dark/25 flex items-center justify-center transition group">
                   <div class="w-16 h-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                     <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                 </a>
                 <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-pine-dark/90 text-sun text-xs font-semibold">${m.albumLabel}</span>
               </div>`;

          return `
            <article class="bg-pine/90 rounded-3xl overflow-hidden border-2 border-sun/50 shadow-xl flex flex-col justify-between">
              <div>
                ${mediaHtml}
                <div class="p-6 space-y-2.5">
                  <span class="text-xs font-semibold text-sun uppercase tracking-wider block">🎼 ${m.style}</span>
                  <h3 class="font-editorial text-2xl font-bold text-mist">${m.title}</h3>
                  <p class="text-sm text-cream/90 leading-relaxed">${m.desc}</p>
                </div>
              </div>
              <div class="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3">
                <a href="${m.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sun text-pine-dark font-bold text-sm hover:bg-sun-light transition shadow">
                  <svg class="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>Xem trên YouTube</span>
                </a>
                <button type="button" data-delete-mv="${m.id}" class="text-xs text-mist/60 hover:text-red-300">Xóa MV</button>
              </div>
            </article>
          `;
        }).join("");

        grid.querySelectorAll("[data-delete-mv]").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-delete-mv");
            appState.mvs = appState.mvs.filter(x => x.id !== id);
            saveStateToStorage();
            renderMusicGrid();
            showToast("Đã xóa MV khỏi danh sách.");
          });
        });
      }

      // ================= RENDER CẨM NANG & LỊCH TRÌNH =================
      let currentGuideFilter = "all";
      let currentGuideSearch = "";

      function renderGuidesGrid() {
        const grid = document.getElementById("guides-grid");
        if (!grid) return;

        const filtered = GUIDES_DATA.filter(g => {
          if (currentGuideFilter !== "all" && g.type !== currentGuideFilter) return false;
          if (currentGuideSearch) {
            const q = currentGuideSearch.toLowerCase();
            return g.title.toLowerCase().includes(q) || g.summary.toLowerCase().includes(q);
          }
          return true;
        });

        grid.innerHTML = filtered.map(g => `
          <article class="bg-cream/60 rounded-2xl p-5 border border-sage/40 flex flex-col justify-between hover:border-pine transition">
            <div>
              <span class="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full ${g.type === 'thuc-te' ? 'bg-pine text-mist' : g.type === 'trung-nien' ? 'bg-sun text-pine-dark' : 'bg-mist text-wood border border-sun/50'}">
                ${g.typeLabel}
              </span>
              <h3 class="font-editorial text-xl font-bold text-pine mt-3 mb-2">${g.title}</h3>
              <p class="text-sm text-[#2C3E35]">${g.summary}</p>
            </div>
            <button type="button" data-read-guide="${g.id}" class="mt-4 text-left text-xs sm:text-sm font-bold text-pine hover:text-wood underline">
              Đọc hướng dẫn chi tiết →
            </button>
          </article>
        `).join("");

        grid.querySelectorAll("[data-read-guide]").forEach(btn => {
          btn.addEventListener("click", () => {
            const g = GUIDES_DATA.find(x => x.id === btn.getAttribute("data-read-guide"));
            if (!g) return;
            openDetailModal({
              title: g.title,
              badge: g.typeLabel,
              meta: "Cẩm nang du lịch Đà Lạt – An Nhiên biên soạn",
              img: IMG.teaHills,
              bodyHtml: g.detail
            });
          });
        });
      }

      let currentItineraryId = "iti-1";
      function renderItineraries() {
        const tabsEl = document.getElementById("itinerary-tabs");
        const boxEl = document.getElementById("itinerary-detail-box");
        if (!tabsEl || !boxEl) return;

        tabsEl.innerHTML = ITINERARIES_DATA.map(it => `
          <button type="button" data-iti-id="${it.id}" class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${it.id === currentItineraryId ? 'bg-pine text-mist shadow' : 'bg-mist text-pine border border-sage/40 hover:bg-sun/30'}">
            ${it.name}
          </button>
        `).join("");

        const active = ITINERARIES_DATA.find(x => x.id === currentItineraryId) || ITINERARIES_DATA[0];
        boxEl.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-5 rounded-2xl overflow-hidden h-56 bg-pine-dark">
              <img src="${active.img}" alt="${active.name}" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="lg:col-span-7 space-y-2.5">
              <span class="text-xs font-bold uppercase text-wood">${active.duration}</span>
              <h4 class="font-editorial text-2xl font-bold text-pine">${active.name}</h4>
              <p class="text-sm font-semibold text-pine">🗺️ Các điểm tham quan: ${active.places}</p>
              <p class="text-sm text-[#2C3E35] leading-relaxed">${active.route}</p>
              <p class="text-xs text-wood bg-cream/80 p-3 rounded-xl border border-sun/40">💡 <strong>${active.note}</strong></p>
            </div>
          </div>
        `;

        tabsEl.querySelectorAll("[data-iti-id]").forEach(btn => {
          btn.addEventListener("click", () => {
            currentItineraryId = btn.getAttribute("data-iti-id");
            renderItineraries();
          });
        });
      }

      // ================= RENDER SỔ LƯU BÚT =================
      function renderGuestbook() {
        const listEl = document.getElementById("guestbook-list");
        if (!listEl) return;
        listEl.innerHTML = appState.guestbook.map(g => `
          <div class="p-3.5 rounded-2xl bg-cream/60 border border-sage/30 text-xs sm:text-sm">
            <div class="flex items-center justify-between font-bold text-pine mb-1">
              <span>🌿 ${g.name}</span>
              <span class="text-wood font-normal text-xs">${g.date}</span>
            </div>
            <p class="text-[#2C3E35]">${g.message}</p>
          </div>
        `).join("");
      }

      // ================= MODAL CHI TIẾT DÙNG CHUNG =================
      function openDetailModal({ title, badge, meta, img, bodyHtml }) {
        const modal = document.getElementById("detail-modal");
        const titleEl = document.getElementById("detail-modal-title");
        const badgeEl = document.getElementById("detail-modal-badge");
        const metaEl = document.getElementById("detail-modal-meta");
        const imgEl = document.getElementById("detail-modal-img");
        const bodyEl = document.getElementById("detail-modal-body");

        if (titleEl) titleEl.textContent = title;
        if (badgeEl) badgeEl.textContent = badge;
        if (metaEl) metaEl.textContent = meta;
        if (imgEl) imgEl.src = img;
        if (bodyEl) bodyEl.innerHTML = bodyHtml;
        if (modal) modal.classList.remove("hidden");
      }

      function copyLinkToClipboard(textMsg) {
        const dummy = document.createElement("textarea");
        dummy.value = window.location.href;
        document.body.appendChild(dummy);
        dummy.select();
        try {
          document.execCommand("copy");
        } catch (e) {}
        document.body.removeChild(dummy);
        showToast(textMsg || "Đã sao chép đường dẫn chia sẻ vào bộ nhớ tạm!");
      }

      // ================= NÉN ẢNH TẢI LÊN TẠO THUMBNAIL NHẸ =================
      function compressImageFile(file, maxWidth, quality) {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
              const canvas = document.createElement("canvas");
              let w = img.width;
              let h = img.height;
              if (w > maxWidth) {
                h = Math.round((h * maxWidth) / w);
                w = maxWidth;
              }
              canvas.width = w;
              canvas.height = h;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, w, h);
              resolve(canvas.toDataURL("image/jpeg", quality));
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      }

      // ================= GẮN SỰ KIỆN TƯƠNG TÁC =================
      function bindAllEvents() {
        // Menu Mobile
        const btnMobileMenu = document.getElementById("btn-mobile-menu");
        const mobilePanel = document.getElementById("mobile-menu-panel");
        const iconOpen = document.getElementById("icon-menu-open");
        const iconClose = document.getElementById("icon-menu-close");

        if (btnMobileMenu && mobilePanel) {
          btnMobileMenu.addEventListener("click", () => {
            const isHidden = mobilePanel.classList.contains("hidden");
            mobilePanel.classList.toggle("hidden", !isHidden);
            if (iconOpen) iconOpen.classList.toggle("hidden", isHidden);
            if (iconClose) iconClose.classList.toggle("hidden", !isHidden);
          });
          mobilePanel.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
              mobilePanel.classList.add("hidden");
              if (iconOpen) iconOpen.classList.remove("hidden");
              if (iconClose) iconClose.classList.add("hidden");
            });
          });
        }

        // Trợ năng: Tăng cỡ chữ cho người trung niên
        const btnFont = document.getElementById("btn-toggle-fontsize");
        if (btnFont) {
          btnFont.addEventListener("click", () => {
            document.body.classList.toggle("font-large");
            const isLarge = document.body.classList.contains("font-large");
            btnFont.innerHTML = `<span>${isLarge ? 'Aa Cỡ chữ chuẩn' : 'Aa Cỡ chữ lớn'}</span>`;
            showToast(isLarge ? "Đã bật chế độ Cỡ chữ lớn dễ đọc." : "Đã chuyển về cỡ chữ tiêu chuẩn.");
          });
        }

        // Trợ năng: Giảm chuyển động
        const btnMotion = document.getElementById("btn-toggle-motion");
        const motionLabel = document.getElementById("motion-status-label");
        if (btnMotion) {
          btnMotion.addEventListener("click", () => {
            document.body.classList.toggle("reduce-motion");
            const isReduced = document.body.classList.contains("reduce-motion");
            if (motionLabel) motionLabel.textContent = `Giảm chuyển động: ${isReduced ? 'Bật' : 'Tắt'}`;
            showToast(isReduced ? "Đã bật chế độ Giảm chuyển động." : "Đã bật lại hiệu ứng chuyển cảnh mượt.");
          });
        }

        // Xem thử trên điện thoại
        const btnMobilePreview = document.getElementById("btn-toggle-mobile-preview");
        if (btnMobilePreview) {
          btnMobilePreview.addEventListener("click", () => {
            document.body.classList.toggle("mobile-preview-mode");
            const isMobile = document.body.classList.contains("mobile-preview-mode");
            btnMobilePreview.innerHTML = `<span>${isMobile ? '🖥️ Xem toàn màn hình' : '📱 Xem thử Điện thoại'}</span>`;
            if (leafletMap) setTimeout(() => leafletMap.invalidateSize(), 300);
          });
        }

        // Nút cuộn tới bảng quản trị
        const btnCmsTop = document.getElementById("btn-open-cms-top");
        if (btnCmsTop) {
          btnCmsTop.addEventListener("click", () => {
            const sec = document.getElementById("quan-tri");
            if (sec) sec.scrollIntoView({ behavior: "smooth" });
          });
        }

        // Điều khiển Hero Slideshow
        const btnPrevHero = document.getElementById("btn-hero-prev");
        const btnNextHero = document.getElementById("btn-hero-next");
        const btnPauseHero = document.getElementById("btn-hero-pause");
        const pauseText = document.getElementById("hero-pause-text");

        if (btnPrevHero) btnPrevHero.addEventListener("click", () => goToHeroSlide(currentHeroIndex - 1));
        if (btnNextHero) btnNextHero.addEventListener("click", () => goToHeroSlide(currentHeroIndex + 1));
        if (btnPauseHero) {
          btnPauseHero.addEventListener("click", () => {
            isHeroPaused = !isHeroPaused;
            if (pauseText) pauseText.textContent = isHeroPaused ? "▶ Tiếp tục" : "⏸ Tạm dừng";
          });
        }

        // Chuyển tab 4 mùa
        document.querySelectorAll(".season-tab-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".season-tab-btn").forEach(b => {
              b.className = "season-tab-btn px-6 py-3 rounded-2xl font-editorial font-bold text-lg transition bg-cream text-pine hover:bg-sun/30 border border-sage/40";
            });
            btn.className = "season-tab-btn px-6 py-3 rounded-2xl font-editorial font-bold text-lg transition bg-pine text-mist shadow-md";
            renderSeasonPanel(btn.getAttribute("data-season"));
          });
        });

        // Bộ lọc Địa điểm
        document.querySelectorAll(".place-filter-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".place-filter-btn").forEach(b => {
              b.className = "place-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-mist text-pine border border-sage/40 hover:bg-cream transition";
            });
            btn.className = "place-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-pine text-mist transition";
            currentPlaceFilter = btn.getAttribute("data-place-filter");
            renderPlacesGrid();
          });
        });

        // Bộ lọc Bản đồ
        document.querySelectorAll(".map-cat-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".map-cat-btn").forEach(b => {
              b.className = "map-cat-btn px-4 py-2 rounded-xl text-sm font-semibold bg-cream text-pine border border-sage/40 hover:bg-sun/30 transition";
            });
            btn.className = "map-cat-btn px-4 py-2 rounded-xl text-sm font-semibold bg-pine text-mist transition";
            renderMapMarkers(btn.getAttribute("data-map-cat"));
          });
        });

        // Bộ lọc Thư viện ảnh
        const gallerySearch = document.getElementById("gallery-search-input");
        if (gallerySearch) {
          gallerySearch.addEventListener("input", (e) => {
            activeSearchText = e.target.value.trim();
            renderGalleryGrid();
          });
        }

        document.querySelectorAll(".gallery-type-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".gallery-type-btn").forEach(b => {
              b.className = "gallery-type-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-pine-dark/70 text-mist border border-sage/40 hover:bg-pine-light transition";
            });
            btn.className = "gallery-type-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-sun text-pine-dark transition";
            activeSourceType = btn.getAttribute("data-source-type");
            renderGalleryGrid();
          });
        });

        const gallerySort = document.getElementById("gallery-sort-select");
        if (gallerySort) {
          gallerySort.addEventListener("change", (e) => {
            activeSortBy = e.target.value;
            renderGalleryGrid();
          });
        }

        const btnShareGallery = document.getElementById("btn-share-gallery");
        if (btnShareGallery) {
          btnShareGallery.addEventListener("click", () => {
            copyLinkToClipboard("Đã sao chép đường dẫn Thư viện ảnh Đà Lạt!");
          });
        }

        // Lightbox Controls
        const lightboxModal = document.getElementById("lightbox-modal");
        const btnLbClose = document.getElementById("btn-lightbox-close");
        const btnLbPrev = document.getElementById("btn-lightbox-prev");
        const btnLbNext = document.getElementById("btn-lightbox-next");
        const btnLbZoom = document.getElementById("btn-lightbox-zoom");
        const btnLbDownload = document.getElementById("btn-lightbox-download");
        const lbImg = document.getElementById("lightbox-img");

        if (btnLbClose && lightboxModal) {
          btnLbClose.addEventListener("click", () => lightboxModal.classList.add("hidden"));
        }
        if (btnLbPrev) btnLbPrev.addEventListener("click", () => openGalleryLightbox(currentLightboxIndex - 1));
        if (btnLbNext) btnLbNext.addEventListener("click", () => openGalleryLightbox(currentLightboxIndex + 1));
        if (btnLbZoom && lbImg) {
          btnLbZoom.addEventListener("click", () => {
            isLightboxZoomed = !isLightboxZoomed;
            lbImg.style.transform = isLightboxZoomed ? "scale(1.45)" : "scale(1)";
          });
        }
        if (btnLbDownload) {
          btnLbDownload.addEventListener("click", () => {
            const item = currentLightboxList[currentLightboxIndex];
            if (!item || !item.allowDownload) return;
            const a = document.createElement("a");
            a.href = item.img;
            a.download = `${item.title.replace(/\s+/g, "-")}.webp`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast("Đang tải tác phẩm ảnh về thiết bị...");
          });
        }

        // Bộ lọc Quán cà phê & Homestay
        document.querySelectorAll(".cafe-filter-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".cafe-filter-btn").forEach(b => {
              b.className = "cafe-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-cream text-pine border border-sage/40 hover:bg-sun/30 transition";
            });
            btn.className = "cafe-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-pine text-mist transition";
            currentCafeFilter = btn.getAttribute("data-cafe-filter");
            renderCafesGrid();
          });
        });

        document.querySelectorAll(".stay-filter-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".stay-filter-btn").forEach(b => {
              b.className = "stay-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-mist text-pine border border-sage/40 hover:bg-sun/30 transition";
            });
            btn.className = "stay-filter-btn px-4 py-2 rounded-full text-sm font-semibold bg-pine text-mist transition";
            currentStayFilter = btn.getAttribute("data-stay-filter");
            renderHomestaysGrid();
          });
        });

        // Bộ lọc Album Âm nhạc
        document.querySelectorAll(".music-album-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".music-album-btn").forEach(b => {
              b.className = "music-album-btn px-4 py-2 rounded-xl text-sm font-semibold bg-pine text-mist border border-sage/40 hover:bg-pine-light transition";
            });
            btn.className = "music-album-btn px-4 py-2 rounded-xl text-sm font-semibold bg-sun text-pine-dark transition";
            currentMusicAlbum = btn.getAttribute("data-music-album");
            renderMusicGrid();
          });
        });

        // Bộ lọc Cẩm nang
        const guideSearch = document.getElementById("guide-search-input");
        if (guideSearch) {
          guideSearch.addEventListener("input", (e) => {
            currentGuideSearch = e.target.value.trim();
            renderGuidesGrid();
          });
        }
        document.querySelectorAll(".guide-filter-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".guide-filter-btn").forEach(b => {
              b.className = "guide-filter-btn px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-mist text-pine border border-sage/40 hover:bg-sun/30 transition";
            });
            btn.className = "guide-filter-btn px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-pine text-mist transition";
            currentGuideFilter = btn.getAttribute("data-guide-filter");
            renderGuidesGrid();
          });
        });

        // Đóng Modal chi tiết
        const detailModal = document.getElementById("detail-modal");
        const btnDetailClose = document.getElementById("btn-detail-close");
        const btnDetailCloseBottom = document.getElementById("btn-detail-close-bottom");
        const btnDetailShare = document.getElementById("btn-detail-share");
        if (btnDetailClose && detailModal) btnDetailClose.addEventListener("click", () => detailModal.classList.add("hidden"));
        if (btnDetailCloseBottom && detailModal) btnDetailCloseBottom.addEventListener("click", () => detailModal.classList.add("hidden"));
        if (btnDetailShare) btnDetailShare.addEventListener("click", () => copyLinkToClipboard("Đã sao chép đường dẫn bài viết!"));

        // Modal Tải Ảnh Mới Lên
        const uploadModal = document.getElementById("upload-photo-modal");
        const btnOpenUpload1 = document.getElementById("btn-open-upload-modal");
        const btnOpenUpload2 = document.getElementById("btn-cms-upload-photo");
        const btnCloseUpload = document.getElementById("btn-close-upload-modal");
        const btnCancelUpload = document.getElementById("btn-cancel-upload");
        const formUpload = document.getElementById("form-upload-photo");

        [btnOpenUpload1, btnOpenUpload2].forEach(b => {
          if (b && uploadModal) b.addEventListener("click", () => uploadModal.classList.remove("hidden"));
        });
        [btnCloseUpload, btnCancelUpload].forEach(b => {
          if (b && uploadModal) b.addEventListener("click", () => uploadModal.classList.add("hidden"));
        });

        if (formUpload) {
          formUpload.addEventListener("submit", async (e) => {
            e.preventDefault();
            const fileInput = document.getElementById("upload-files-input");
            const titleInput = document.getElementById("upload-photo-title");
            const albumSelect = document.getElementById("upload-photo-album");
            const sourceSelect = document.getElementById("upload-photo-source");
            const descInput = document.getElementById("upload-photo-desc");
            const allowDl = document.getElementById("upload-allow-download");

            const files = fileInput ? Array.from(fileInput.files) : [];
            if (!files.length) return;

            const albumObj = ALBUM_CATEGORIES.find(a => a.id === albumSelect.value);
            const today = new Date().toISOString().slice(0, 10);

            for (let i = 0; i < files.length; i++) {
              const dataUrl = await compressImageFile(files[i], 1100, 0.82);
              const titleText = files.length > 1 ? `${titleInput.value} (${i + 1})` : titleInput.value;
              appState.gallery.unshift({
                id: "photo-" + Date.now() + "-" + i,
                title: titleText,
                album: albumSelect.value,
                albumLabel: albumObj ? albumObj.name : "Thư viện Đà Lạt",
                sourceType: sourceSelect.value,
                date: today,
                allowDownload: allowDl ? allowDl.checked : true,
                img: dataUrl,
                desc: descInput.value || "Tác phẩm mới được tải lên thư viện An Nhiên – Đà Lạt Mộng Mơ."
              });
            }

            saveStateToStorage();
            renderGalleryGrid();
            formUpload.reset();
            if (uploadModal) uploadModal.classList.add("hidden");
            showToast(`Đã tải lên thành công ${files.length} ảnh vào thư viện!`);
          });
        }

        // Modal Thêm MV YouTube mới
        const mvModal = document.getElementById("add-mv-modal");
        const btnOpenMv1 = document.getElementById("btn-open-add-mv");
        const btnOpenMv2 = document.getElementById("btn-cms-add-mv");
        const btnCloseMv = document.getElementById("btn-close-mv-modal");
        const btnCancelMv = document.getElementById("btn-cancel-mv");
        const formMv = document.getElementById("form-add-mv");

        [btnOpenMv1, btnOpenMv2].forEach(b => {
          if (b && mvModal) b.addEventListener("click", () => mvModal.classList.remove("hidden"));
        });
        [btnCloseMv, btnCancelMv].forEach(b => {
          if (b && mvModal) b.addEventListener("click", () => mvModal.classList.add("hidden"));
        });

        if (formMv) {
          formMv.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("mv-title-input").value.trim();
            const album = document.getElementById("mv-album-input").value;
            const style = document.getElementById("mv-style-input").value.trim() || "Trữ tình • An Nhiên AI Music";
            const url = document.getElementById("mv-youtube-url").value.trim();
            const desc = document.getElementById("mv-desc-input").value.trim() || "Ca khúc mới trên kênh YouTube An Nhiên AI Music (TTA).";

            const ytId = extractYouTubeId(url);
            const coverImg = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : IMG.pineCloud;

            appState.mvs.unshift({
              id: "mv-" + Date.now(),
              title,
              album,
              albumLabel: "Giai Điệu An Nhiên",
              style,
              cover: coverImg,
              youtubeUrl: url,
              desc
            });

            saveStateToStorage();
            renderMusicGrid();
            formMv.reset();
            if (mvModal) mvModal.classList.add("hidden");
            showToast("Đã thêm MV mới vào chuyên mục Giai Điệu An Nhiên!");
          });
        }

        // Modal Viết bài Ký ức mới
        const writeModal = document.getElementById("write-post-modal");
        const btnOpenWrite = document.getElementById("btn-cms-write-post");
        const btnCloseWrite = document.getElementById("btn-close-write-modal");
        const btnCancelWrite = document.getElementById("btn-cancel-write");
        const formWrite = document.getElementById("form-write-post");

        if (btnOpenWrite && writeModal) btnOpenWrite.addEventListener("click", () => writeModal.classList.remove("hidden"));
        [btnCloseWrite, btnCancelWrite].forEach(b => {
          if (b && writeModal) b.addEventListener("click", () => writeModal.classList.add("hidden"));
        });

        if (formWrite) {
          formWrite.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("post-title-input").value.trim();
            const category = document.getElementById("post-category-input").value;
            const contentText = document.getElementById("post-content-input").value.trim();
            const today = new Date().toLocaleDateString("vi-VN");

            appState.memories.unshift({
              id: "mem-" + Date.now(),
              title,
              date: today,
              category,
              isSample: false,
              img: IMG.cherrySlope,
              excerpt: contentText.slice(0, 140) + (contentText.length > 140 ? "..." : ""),
              content: `<p>${contentText.replace(/\n/g, "</p><p>")}</p>`
            });

            saveStateToStorage();
            renderMemoriesGrid();
            formWrite.reset();
            if (writeModal) writeModal.classList.add("hidden");
            showToast("Đã đăng bài viết mới vào Ký ức Đà Lạt!");
          });
        }

        // Thay ảnh chân dung tác giả Trịnh Thị An
        const inputAvatar = document.getElementById("input-change-avatar");
        const authorImg = document.getElementById("author-portrait-img");
        if (inputAvatar && authorImg) {
          inputAvatar.addEventListener("change", async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const dataUrl = await compressImageFile(file, 600, 0.85);
            authorImg.src = dataUrl;
            appState.authorAvatar = dataUrl;
            saveStateToStorage();
            showToast("Đã cập nhật ảnh chân dung tác giả Trịnh Thị An!");
          });
        }

        // Sửa câu chuyện cá nhân của tác giả
        const storyModal = document.getElementById("edit-story-modal");
        const btnEditStory = document.getElementById("btn-edit-author-story");
        const btnCancelStory = document.getElementById("btn-cancel-story");
        const formStory = document.getElementById("form-edit-story");
        const textareaStory = document.getElementById("textarea-author-story");
        const storyDisplay = document.getElementById("author-personal-story");

        if (btnEditStory && storyModal && textareaStory) {
          btnEditStory.addEventListener("click", () => {
            textareaStory.value = appState.authorStory;
            storyModal.classList.remove("hidden");
          });
        }
        if (btnCancelStory && storyModal) {
          btnCancelStory.addEventListener("click", () => storyModal.classList.add("hidden"));
        }
        if (formStory && storyDisplay) {
          formStory.addEventListener("submit", (e) => {
            e.preventDefault();
            appState.authorStory = textareaStory.value.trim();
            storyDisplay.textContent = appState.authorStory;
            saveStateToStorage();
            if (storyModal) storyModal.classList.add("hidden");
            showToast("Đã lưu câu chuyện cá nhân của tác giả!");
          });
        }

        // Sao lưu & Phục hồi dữ liệu JSON
        const btnExport = document.getElementById("btn-export-backup");
        const inputImport = document.getElementById("input-import-backup");

        if (btnExport) {
          btnExport.addEventListener("click", () => {
            const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `an-nhien-da-lat-backup-${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("Đã tải tệp sao lưu dữ liệu (.JSON) về máy!");
          });
        }

        if (inputImport) {
          inputImport.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (ev) {
              try {
                const imported = JSON.parse(ev.target.result);
                if (imported && typeof imported === "object") {
                  appState = Object.assign(appState, imported);
                  saveStateToStorage();
                  renderAllSections();
                  showToast("Đã phục hồi dữ liệu website thành công!");
                }
              } catch (err) {
                showToast("Tệp JSON không hợp lệ, vui lòng kiểm tra lại.");
              }
            };
            reader.readAsText(file);
          });
        }

        // Sổ lưu bút
        const guestForm = document.getElementById("contact-guestbook-form");
        if (guestForm) {
          guestForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("guest-name").value.trim();
            const message = document.getElementById("guest-message").value.trim();
            if (!name || !message) return;
            appState.guestbook.unshift({
              name,
              date: new Date().toLocaleDateString("vi-VN"),
              message
            });
            saveStateToStorage();
            renderGuestbook();
            guestForm.reset();
            showToast("Cảm ơn bạn đã gửi lời nhắn lưu bút tới An Nhiên!");
          });
        }

        // Phím tắt bàn phím cho Lightbox (Hỗ trợ tiếp cận bàn phím)
        document.addEventListener("keydown", (e) => {
          if (lightboxModal && !lightboxModal.classList.contains("hidden")) {
            if (e.key === "Escape") lightboxModal.classList.add("hidden");
            if (e.key === "ArrowLeft") openGalleryLightbox(currentLightboxIndex - 1);
            if (e.key === "ArrowRight") openGalleryLightbox(currentLightboxIndex + 1);
          }
          if (detailModal && !detailModal.classList.contains("hidden") && e.key === "Escape") {
            detailModal.classList.add("hidden");
          }
        });
      }

      function renderAllSections() {
        const storyDisplay = document.getElementById("author-personal-story");
        const authorImg = document.getElementById("author-portrait-img");
        if (storyDisplay) storyDisplay.textContent = appState.authorStory;
        if (authorImg && appState.authorAvatar) authorImg.src = appState.authorAvatar;

        renderSeasonPanel(currentSeasonKey);
        renderPlacesGrid();
        renderGalleryAlbumTabs();
        renderGalleryGrid();
        renderCafesGrid();
        renderHomestaysGrid();
        renderMemoriesGrid();
        renderMusicGrid();
        renderGuidesGrid();
        renderItineraries();
        renderGuestbook();
      }

      // Khởi chạy toàn bộ ứng dụng khi DOM sẵn sàng
      window.addEventListener("DOMContentLoaded", () => {
        loadStateFromStorage();
        renderHeroSlides();
        startHeroAutoplay();
        renderAllSections();
        initDalatMap();
        bindAllEvents();
      });
    })();
