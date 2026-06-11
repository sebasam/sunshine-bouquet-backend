using SunshineBouquet.Domain.Entities;
using SunshineBouquet.Domain.Enums;
using SunshineBouquet.Infrastructure.Data;

namespace SunshineBouquet.Api.GraphQL;

public class Mutation
{
    public async Task<Order> CreateOrderAsync(
        string customerStore, string originCountry, string destinationCity, int bouquetQuantity,
        [Service] ApplicationDbContext context)
    {
        var order = new Order(customerStore, originCountry, destinationCity, bouquetQuantity);
        context.Orders.Add(order);
        await context.SaveChangesAsync();
        return order;
    }

    public async Task<Order> UpdateOrderStatusAsync(
        Guid id, OrderStatus newStatus, [Service] ApplicationDbContext context)
    {
        var order = await context.Orders.FindAsync(id);
        if (order == null) throw new Exception("OrderNotFound");

        order.ChangeStatus(newStatus);
        await context.SaveChangesAsync();
        return order;
    }
}