using System;
namespace MedicineCabinet_UI.Models
{
    public class Medicine
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public int Quantity { get; set; }

        public int Dosage { get; set; }

        public string Brand { get; set; }

        public string Pharmacy { get; set; }
    }
}
