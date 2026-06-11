using Xunit;
using SunshineBouquet.Domain.Entities;
using SunshineBouquet.Domain.Enums;
using System;

namespace SunshineBouquet.Tests;

public class OrderTests
{
    [Fact]
    public void ChangeStatus_FromCreatedToInTransit_ShouldUpdateStatus()
    {
        var order = new Order("Store A", "Colombia", "Miami", 500);

        order.ChangeStatus(OrderStatus.IN_TRANSIT);

        Assert.Equal(OrderStatus.IN_TRANSIT, order.Status);
    }

    [Fact]
    public void ChangeStatus_InvalidTransition_ShouldThrowException()
    {
        var order = new Order("Store A", "Colombia", "Miami", 500);
        order.ChangeStatus(OrderStatus.IN_TRANSIT);

        Assert.Throws<InvalidOperationException>(() => order.ChangeStatus(OrderStatus.CANCELLED));
    }
}