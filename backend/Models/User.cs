using System.ComponentModel.DataAnnotations;  // ← これを必ずファイルの先頭に追加してください

namespace Apiren.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]    // ← ここに追加
        public string Name { get; set; }

        [Required]    // ← ここに追加
        public string Email { get; set; }

        [Required]    // ← ここに追加
        public string Address { get; set; }

        [Required]    // ← ここに追加
        public string TelNo { get; set; }
        [Required] // 出勤区分（例: "出勤", "退勤", "休憩" など）
        public string Status { get; set; }
    }
}

