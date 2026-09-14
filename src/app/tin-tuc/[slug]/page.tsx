import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

// Fake data for blog posts based on the slugs we created
const blogPosts = {
  "quan-ly-chuoi-cung-ung-vlxd-nhap-khau-tu-trung-quoc-2026-thuc-trang-toan-dien-giai-phap-toi-uu": {
    title: "Quản lý chuỗi cung ứng VLXD nhập khẩu từ Trung Quốc 2026: Thực trạng và Giải pháp",
    date: "14/09/2026",
    author: "Kỳ Tốc Academy",
    category: "Chuỗi Cung Ứng",
    image: "https://images.unsplash.com/photo-1541888081604-585e5091bf2e?q=80&w=2070",
    content: `
      <h2>1. Thực trạng Quản lý Chuỗi cung ứng Vật liệu Xây dựng (VLXD) năm 2026</h2>
      <p>Năm 2026, thị trường Vật liệu xây dựng nhập khẩu từ Trung Quốc tiếp tục chứng kiến sự biến động lớn về giá cả, đứt gãy chuỗi cung ứng tạm thời tại các cửa khẩu và áp lực từ các chính sách kiểm soát chất lượng mới. Nhiều doanh nghiệp phải đối mặt với bài toán chi phí kho bãi tăng cao và thời gian giao hàng (lead time) không ổn định.</p>
      
      <h2>2. Khó khăn của Nhà thầu và Chủ đầu tư</h2>
      <p>Đối với các dự án lớn, việc chậm trễ một lô hàng vật liệu có thể gây thiệt hại hàng tỷ đồng mỗi ngày. Nguyên nhân thường xuất phát từ việc thiếu tính toán Tổng chi phí sở hữu (TCO) và dự phòng rủi ro trong hợp đồng ngoại thương với đối tác Trung Quốc.</p>
      
      <h2>3. Giải pháp Tối ưu hóa Chuỗi cung ứng</h2>
      <ul>
        <li><strong>Đa dạng hóa nhà cung cấp:</strong> Không phụ thuộc vào một xưởng sản xuất duy nhất tại Quảng Đông hay Phật Sơn.</li>
        <li><strong>Ứng dụng công nghệ:</strong> Sử dụng các phần mềm quản lý kho và theo dõi vận đơn (tracking) theo thời gian thực (Real-time).</li>
        <li><strong>Quản lý rủi ro pháp lý:</strong> Đảm bảo 100% lô hàng có chứng nhận xuất xứ (C/O) và chứng nhận chất lượng (C/Q) minh bạch ngay từ đầu nguồn.</li>
      </ul>
      
      <blockquote>Tại Kỳ Tốc Academy, chúng tôi luôn hướng dẫn học viên cách phân tích rủi ro trong quản trị SCM bằng các dự án thực tế, giúp doanh nghiệp tránh được những "cú sốc" từ thị trường. Nếu bạn gặp khó khăn, hãy liên hệ ngay Kỳ Tốc Academy để được hỗ trợ.</blockquote>
    `
  },
  "cach-dam-phan-gia-voi-nha-cung-cap-trung-quoc": {
    title: "Cách đàm phán giá với nhà cung cấp Trung Quốc hiệu quả nhất",
    date: "10/09/2026",
    author: "Ms. Anna",
    category: "Mua hàng & Sourcing",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974",
    content: `
      <h2>1. Hiểu Rõ Về Đối Tác - "Biết Người Biết Ta"</h2>
      <p>Trước khi bắt đầu đàm phán, hãy tìm hiểu kỹ về nhà cung cấp trên 1688 hoặc Alibaba. Xem xét huy hiệu "Đầu trâu" (đối với 1688), số năm hoạt động, tỷ lệ phản hồi và quy mô nhà máy. Việc biết họ là công ty thương mại (Trading Company) hay xưởng sản xuất trực tiếp (Factory) sẽ quyết định chiến lược đàm phán của bạn.</p>
      
      <h2>2. Chiến Thuật Đàm Phán TCO (Total Cost of Ownership)</h2>
      <p>Đừng chỉ nhìn vào đơn giá sản phẩm. Hãy đàm phán dựa trên TCO bao gồm: Giá hàng hóa + Phí vận chuyển nội địa (Freeship hoặc hỗ trợ phí) + Tỷ lệ hàng lỗi được bù trừ + Chi phí làm khuôn mẫu (Mould fee). Một xưởng có thể báo giá cao hơn một chút nhưng miễn phí ship nội địa và đóng gói chắc chắn đôi khi lại là lựa chọn rẻ hơn.</p>
      
      <h2>3. Khảo Giá và Sử Dụng "Mỏ Neo" Giá (Price Anchoring)</h2>
      <ul>
        <li>Luôn hỏi giá ít nhất 3-5 nhà cung cấp khác nhau để biết mặt bằng chung.</li>
        <li>Khi đàm phán, hãy đưa ra một mức giá mục tiêu thấp hơn kỳ vọng một chút để có dư địa nhượng bộ.</li>
        <li>Thể hiện bạn là một "người mua chuyên nghiệp" có tiềm năng mua số lượng lớn trong tương lai (dù hiện tại bạn chỉ đang mua test mẫu).</li>
      </ul>
      
      <p><em>Lời khuyên:</em> Nếu bạn muốn tìm hiểu sâu hơn về quy trình Sourcing, hãy tham gia các khóa học Mua hàng thực chiến tại Kỳ Tốc Academy.</p>
    `
  },
  "hang-hoa-cong-nghe-trung-quoc": {
    title: "Xu hướng nhập khẩu Hàng hóa Công nghệ từ Trung Quốc",
    date: "05/09/2026",
    author: "Mr. Tít",
    category: "Nghiệp vụ",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    content: `
      <h2>1. Sự Trỗi Dậy Của Các Ngành Hàng Mới</h2>
      <p>Trung Quốc không chỉ còn là "công xưởng gia công" mà đã trở thành trung tâm sáng tạo công nghệ. Các mặt hàng như thiết bị nhà thông minh (Smart Home), linh kiện xe điện (EV parts), và thiết bị năng lượng mặt trời đang là xu hướng nhập khẩu mạnh mẽ về Việt Nam.</p>
      
      <h2>2. Lưu Ý Về Thủ Tục Nhập Khẩu Hàng Công Nghệ</h2>
      <p>Mặt hàng công nghệ, đặc biệt là thiết bị phát sóng, đồ gia dụng điện tử thường yêu cầu các giấy phép chuyên ngành gắt gao:</p>
      <ul>
        <li><strong>Hợp quy (CR):</strong> Bắt buộc đối với nhiều loại thiết bị điện tử, đồ gia dụng để đảm bảo an toàn.</li>
        <li><strong>Kiểm tra chất lượng nhà nước:</strong> Yêu cầu đối với một số nhóm hàng cụ thể trước khi được thông quan.</li>
        <li><strong>Giấy phép nhập khẩu thiết bị phát thu phát sóng vô tuyến điện.</strong></li>
      </ul>
      
      <h2>3. Rủi Ro Thường Gặp</h2>
      <p>Rủi ro lớn nhất không phải là giá cả, mà là hàng không đạt tiêu chuẩn kỹ thuật khi kiểm định, dẫn đến tình trạng hàng bị lưu bãi lâu ngày hoặc buộc tái xuất. Doanh nghiệp cần tham vấn rõ với xưởng sản xuất về các chứng chỉ CE, RoHS, FCC mà họ đã có.</p>
      <p>Cần hỗ trợ về quy trình nhập khẩu và xin giấy phép chuyên ngành? Đội ngũ chuyên gia tại Kỳ Tốc Academy luôn sẵn sàng đồng hành cùng bạn.</p>
    `
  },
  "trung-viet-logistics": {
    title: "Trung - Việt Logistics: Tuyến đường huyết mạch và những lưu ý",
    date: "01/09/2026",
    author: "Mr. Alex",
    category: "Kiến thức Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    content: `
      <h2>1. Tầm Quan Trọng Của Tuyến Đường Bộ Trung - Việt</h2>
      <p>Với ưu thế giáp biên giới, vận tải đường bộ giữa Trung Quốc và Việt Nam chiếm tỷ trọng khổng lồ trong tổng kim ngạch xuất nhập khẩu. Các cửa khẩu trọng điểm như Hữu Nghị, Tân Thanh (Lạng Sơn), Móng Cái (Quảng Ninh) hay Kim Thành (Lào Cai) đóng vai trò là những yết hầu quan trọng.</p>
      
      <h2>2. Bài Toán Tối Ưu Thời Gian Thông Quan</h2>
      <p>Tình trạng ùn ứ tại cửa khẩu thường diễn ra vào mùa cao điểm (trước Tết Nguyên Đán, mùa thu hoạch nông sản). Để tránh rủi ro, doanh nghiệp cần:</p>
      <ul>
        <li>Lựa chọn cửa khẩu phù hợp với loại hình hàng hóa (VD: Hàng tiêu dùng thường qua Tân Thanh, hàng máy móc công trình qua Hữu Nghị).</li>
        <li>Chuẩn bị bộ chứng từ điện tử sớm, khai báo hải quan trước khi xe hàng đến cửa khẩu.</li>
        <li>Sử dụng dịch vụ xe tải liên vận để tránh phải sang tải tại bãi biên giới, giảm thiểu rủi ro hư hỏng hàng hóa.</li>
      </ul>
      
      <h2>3. Xu Hướng Chuyển Đổi Số Trong Logistics</h2>
      <p>Hệ thống Cửa khẩu số đang được áp dụng rộng rãi giúp tự động hóa nhiều khâu kiểm duyệt, giảm bớt thủ tục giấy tờ. Để nắm bắt kịp thời các quy trình mới nhất, các khóa học đào tạo tại Kỳ Tốc Academy liên tục cập nhật bộ quy chuẩn vận hành mới nhất từ hải quan hai nước.</p>
    `
  },
  "thue-nhap-khau-tu-trung-quoc-ve-viet-nam": {
    title: "Biểu thuế xuất nhập khẩu ưu đãi đặc biệt ACFTA: Những điều cần biết",
    date: "25/08/2026",
    author: "Ms. Hương",
    category: "Kiến thức Logistics",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    content: `
      <h2>1. ACFTA Là Gì?</h2>
      <p>ACFTA (Khu vực Thương mại tự do ASEAN - Trung Quốc) mang lại lợi thế vô cùng lớn cho các nhà nhập khẩu Việt Nam. Hàng ngàn dòng thuế được cắt giảm về 0% nếu hàng hóa đáp ứng được các quy tắc xuất xứ nội khối.</p>
      
      <h2>2. Điều Kiện Để Hưởng Thuế Suất Ưu Đãi</h2>
      <p>Để áp dụng mức thuế suất nhập khẩu ACFTA, lô hàng phải có Giấy chứng nhận xuất xứ (C/O) Form E hợp lệ. Một số lưu ý quan trọng về Form E:</p>
      <ul>
        <li>Thông tin trên Form E (Tên hàng, HS code, số lượng, trọng lượng) phải khớp 100% với Invoice, Packing List và Tờ khai hải quan.</li>
        <li>Phải là Form E do các cơ quan có thẩm quyền cấp (như CCPIT hoặc Hải quan Trung Quốc).</li>
        <li>Trường hợp có bên thứ 3 xuất hóa đơn (Third Party Invoicing), cần tick đúng vào ô số 13 và ghi rõ thông tin công ty phát hành Invoice.</li>
      </ul>
      
      <h2>3. Cách Tra Cứu HS Code Và Thuế Suất</h2>
      <p>Việc áp mã HS (HS code) sai có thể dẫn đến việc bị truy thu thuế hoặc phạt vi phạm hành chính. Bạn có thể sử dụng biểu thuế xuất nhập khẩu hàng năm hoặc tra cứu trực tuyến trên hệ thống Hải quan. Nếu bạn cần được đào tạo nghiệp vụ làm chứng từ chuẩn xác, Kỳ Tốc Academy cung cấp các module học chuyên sâu về Phân loại hàng hóa và Xuất xứ.</p>
    `
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Try to find the specific blog post, otherwise fallback to a generic one
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts] || {
    title: "Bài viết chuyên đề Logistics và Supply Chain",
    date: "10/09/2026",
    author: "Ban Biên Tập Kỳ Tốc",
    category: "Góc Nhìn Chuyên Gia",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574",
    content: `
      <h2>1. Bối cảnh thị trường Logistics hiện nay</h2>
      <p>Thị trường logistics đang trải qua nhiều biến động với sự thay đổi của chuỗi cung ứng toàn cầu. Việc nắm bắt thông tin và kiến thức chuyên môn là yếu tố sống còn giúp các doanh nghiệp và cá nhân trong ngành thích ứng và phát triển.</p>
      
      <h2>2. Tại sao kiến thức thực chiến lại quan trọng?</h2>
      <p>Lý thuyết trường lớp cung cấp nền tảng, nhưng chỉ có va chạm với những đơn hàng thực tế, những sự cố phát sinh tại cảng, cửa khẩu mới rèn luyện được bản lĩnh của một chuyên viên SCM/Logistics thực thụ. Đó là lý do Kỳ Tốc Academy luôn nhấn mạnh vào tính ứng dụng và thực chiến.</p>
      
      <p>Nội dung bài viết đang được tiếp tục cập nhật và hoàn thiện bởi các chuyên gia từ hệ sinh thái Kỳ Tốc Logistics. Vui lòng quay lại sau để đọc bản đầy đủ.</p>
    `
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Article Header */}
      <div className="relative w-full h-[40vh] min-h-[400px] flex items-end pb-40">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${post.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <Link href="/tin-tuc" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại danh sách bài viết
          </Link>
          
          <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {post.category}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 phút đọc</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border p-8 md:p-12 -mt-32 relative z-20">
          <article 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-li:text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <hr className="my-12" />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/50 mb-1">Tác giả</p>
              <p className="font-bold text-lg">{post.author}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-foreground/50 mb-1">Nguồn tham khảo</p>
              <a href="https://kytoc.vn" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">kytoc.vn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
