using SunshineBouquet.Domain.Enums;

namespace SunshineBouquet.Domain.Entities;

public class Order
{
    public Guid Id { get; private set; }
    public string CustomerStore { get; private set; }
    public string OriginCountry { get; private set; }
    public string DestinationCity { get; private set; }
    public int BouquetQuantity { get; private set; }
    public OrderStatus Status { get; private set; }
    public DateTime CreatedAt { get; private set; }

    protected Order() { }

    public Order(string customerStore, string originCountry, string destinationCity, int bouquetQuantity)
    {
        Id = Guid.NewGuid();
        CustomerStore = customerStore;
        OriginCountry = originCountry;
        DestinationCity = destinationCity;
        BouquetQuantity = bouquetQuantity;
        Status = OrderStatus.CREATED;
        CreatedAt = DateTime.UtcNow;
    }

    public void ChangeStatus(OrderStatus newStatus)
    {
        if (Status == OrderStatus.CREATED && newStatus == OrderStatus.IN_TRANSIT)
            Status = newStatus;
        else if (Status == OrderStatus.IN_TRANSIT && newStatus == OrderStatus.DELIVERED)
            Status = newStatus;
        else if (Status == OrderStatus.CREATED && newStatus == OrderStatus.CANCELLED)
            Status = newStatus;
        else
            throw new InvalidOperationException();
    }
}