import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

// Fake data for blog posts based on the slugs we created
const blogPosts = {
  "cap-nhat-quy-dinh-hai-quan-2026": {
    title: "Cập nhật Quy định Hải quan và Thuế XNK mới nhất 2026",
    date: "12/09/2026",
    author: "Admin KTL",
    category: "Kiến thức Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    content: `
      <h2>1. Thay đổi về thủ tục Hải quan điện tử</h2>
      <p>Từ đầu năm 2026, Tổng cục Hải quan đã triển khai hệ thống thông quan tự động mới, yêu cầu 100% doanh nghiệp phải cập nhật chữ ký số và khai báo qua cổng VNSW phiên bản 3.0. Điều này giúp giảm thiểu thời gian chờ đợi tại cửa khẩu Lạng Sơn và Lào Cai xuống còn chưa đầy 2 giờ đối với luồng xanh.</p>
      
      <h2>2. Biểu thuế xuất nhập khẩu ưu đãi đặc biệt ACFTA</h2>
      <p>Các mặt hàng thuộc nhóm điện tử gia dụng và linh kiện cơ khí khi nhập khẩu từ Trung Quốc sẽ tiếp tục được hưởng mức thuế suất 0% nếu có C/O form E hợp lệ. Tuy nhiên, quy định về truy xuất nguồn gốc (Traceability) đã được siết chặt. Doanh nghiệp cần đảm bảo nhà sản xuất tại Trung Quốc cung cấp đầy đủ chứng từ chứng minh xuất xứ nguyên vật liệu.</p>
      
      <h2>3. Lưu ý khi làm thủ tục tại cửa khẩu đường bộ</h2>
      <p>Đối với tuyến đường bộ Việt - Trung, đặc biệt qua cửa khẩu Hữu Nghị và Tân Thanh, quy định kiểm hóa đã có sự thay đổi. Tỷ lệ kiểm tra ngẫu nhiên đối với các mặt hàng rủi ro cao như hàng tiêu dùng, mỹ phẩm, thực phẩm chức năng đã tăng lên 15%. Doanh nghiệp cần lưu ý:</p>
      <ul>
        <li>Khai báo chính xác mã HS code ngay từ đầu để tránh bị chuyển luồng.</li>
        <li>Chuẩn bị sẵn sàng bộ chứng từ giấy để xuất trình khi có yêu cầu kiểm tra đột xuất.</li>
        <li>Sử dụng dịch vụ của các đơn vị Forwarder uy tín có kinh nghiệm xử lý hàng tại bãi kiểm hóa.</li>
      </ul>
      
      <blockquote>"Sự chuẩn bị kỹ lưỡng về chứng từ là chìa khóa để hàng hóa thông quan nhanh chóng, tiết kiệm chi phí lưu bãi và đảm bảo tiến độ kinh doanh." - Admin KTL</blockquote>
    `
  },
  "bi-quyet-sourcing-hang-1688": {
    title: "Bí quyết Sourcing Hàng 1688 Tận Xưởng, Tối Ưu TCO",
    date: "05/09/2026",
    author: "Ms. Anna",
    category: "Mua hàng & Sourcing",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    content: `
      <h2>1. Tại sao lại là 1688 mà không phải Taobao?</h2>
      <p>1688.com là nền tảng bán buôn nội địa Trung Quốc thuộc tập đoàn Alibaba. Khác với Taobao dành cho bán lẻ (B2C/C2C), 1688 là nơi tập trung các xưởng sản xuất, nhà phân phối lớn (B2B). Nếu bạn đang muốn nhập hàng số lượng lớn để kinh doanh, 1688 là mỏ vàng không thể bỏ qua với mức giá tận gốc.</p>
      
      <h2>2. Quy trình 5 bước Sourcing 1688 tối ưu</h2>
      <ul>
        <li><strong>Bước 1: Tìm kiếm bằng hình ảnh và từ khóa.</strong> Sử dụng công cụ dịch thuật để tìm từ khóa tiếng Trung chính xác hoặc sử dụng tính năng tìm kiếm bằng hình ảnh (icon camera) trên app 1688.</li>
        <li><strong>Bước 2: Lọc nhà cung cấp uy tín (Biểu tượng Đầu trâu).</strong> Ưu tiên các xưởng có biểu tượng Đầu trâu (Niutou) - đây là các xưởng đã được Alibaba xác thực năng lực sản xuất, diện tích nhà máy và doanh thu.</li>
        <li><strong>Bước 3: Đọc hiểu chỉ số xưởng.</strong> Chú ý đến tỷ lệ khách hàng quay lại (Repurchase rate), tốc độ phản hồi, và đánh giá (review) thực tế từ các người mua trước.</li>
        <li><strong>Bước 4: Đàm phán trực tiếp qua AliWangWang.</strong> Đừng bao giờ mua ngay với giá niêm yết. Hãy chat trực tiếp với xưởng để thương lượng giá khi mua số lượng lớn, xin mẫu thử (sample) và hỏi về phí vận chuyển nội địa (Freeship nội địa).</li>
        <li><strong>Bước 5: Tính toán TCO (Tổng chi phí sở hữu).</strong> Giá vốn không chỉ là giá mua trên web. TCO = Giá sản phẩm + Phí ship nội địa Trung + Phí dịch vụ ủy thác + Phí vận chuyển Trung Việt + Thuế (nếu đi chính ngạch).</li>
      </ul>
      
      <h2>3. Kinh nghiệm thực chiến từ chuyên gia</h2>
      <p>Tại Kỳ Tốc Academy, chúng tôi luôn nhấn mạnh việc <em>"Không bỏ tất cả trứng vào một giỏ"</em>. Hãy luôn có 2-3 nhà cung cấp dự phòng cho một sản phẩm. Điều này không chỉ giúp bạn so sánh giá mà còn đảm bảo chuỗi cung ứng không bị đứt gãy nếu một xưởng gặp sự cố sản xuất.</p>
    `
  },
  "huong-dan-lap-packing-list": {
    title: "Hướng dẫn lập Packing List và Commercial Invoice chuẩn 100%",
    date: "01/09/2026",
    author: "Ms. Hương",
    category: "Nghiệp vụ",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    content: `
      <h2>1. Tầm quan trọng của Packing List và Commercial Invoice</h2>
      <p>Trong bộ chứng từ xuất nhập khẩu, Packing List (Phiếu đóng gói) và Commercial Invoice (Hóa đơn thương mại) là hai tài liệu xương sống. Mọi sai sót nhỏ về số lượng, trọng lượng, hay mô tả hàng hóa trên hai chứng từ này đều có thể dẫn đến việc hải quan giữ hàng, phạt hành chính, hoặc yêu cầu kiểm hóa 100%.</p>
      
      <h2>2. Cách lập Commercial Invoice (Hóa đơn thương mại)</h2>
      <p>Commercial Invoice không chỉ là chứng từ thanh toán mà còn là căn cứ để hải quan tính thuế. Các trường thông tin bắt buộc phải có:</p>
      <ul>
        <li><strong>Thông tin người bán (Seller/Exporter) và người mua (Buyer/Importer):</strong> Tên công ty, địa chỉ, số điện thoại, mã số thuế (nếu có).</li>
        <li><strong>Số Invoice và Ngày phát hành:</strong> Rất quan trọng để đối chiếu.</li>
        <li><strong>Mô tả hàng hóa (Description of Goods):</strong> Phải chi tiết, rõ ràng, khớp với HS code dự kiến khai báo. Tránh dùng từ ngữ chung chung.</li>
        <li><strong>Số lượng, Đơn giá, Tổng tiền:</strong> Rõ ràng loại tiền tệ (USD, CNY, VND...).</li>
        <li><strong>Điều kiện giao hàng (Incoterms):</strong> Ví dụ: FOB Shanghai, CIF Hai Phong, DAP Hanoi (Incoterms 2020). Đây là cơ sở để xác định trị giá tính thuế.</li>
      </ul>

      <h2>3. Cách lập Packing List (Phiếu đóng gói)</h2>
      <p>Nếu Invoice trả lời câu hỏi "Hàng giá bao nhiêu?", thì Packing List trả lời câu hỏi "Hàng được đóng gói như thế nào?".</p>
      <ul>
        <li>Quy cách đóng gói: Bao nhiêu kiện (CTN, PLT, ROLL...), kích thước mỗi kiện (Dimension).</li>
        <li>Trọng lượng tịnh (Net Weight - N.W) và Trọng lượng cả bì (Gross Weight - G.W). Tổng G.W trên Packing List <strong>bắt buộc phải khớp</strong> với G.W trên Vận đơn (Bill of Lading / Airway Bill).</li>
        <li>Số hiệu kiện hàng (Shipping Marks) để dễ dàng nhận diện tại kho bãi.</li>
      </ul>
      
      <p><em>Lời khuyên:</em> Luôn tạo thói quen kiểm tra chéo (cross-check) dữ liệu giữa Invoice, Packing List và Bill of Lading trước khi truyền tờ khai hải quan.</p>
    `
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Try to find the specific blog post, otherwise fallback to a generic one
  const post = blogPosts[params.slug as keyof typeof blogPosts] || {
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
      <div className="relative w-full h-[40vh] min-h-[400px] flex items-end pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: \`url('\${post.image}')\` }}
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
