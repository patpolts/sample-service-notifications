import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(
        private prismaService: PrismaService
    ){}

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prismaService.notifications.create({
            data: raw,
        });
    }
    
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notifications.findUnique({
            where: {
                id: notificationId,
            },
        });

        if (!notification) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
        
    }

    async save(notificationId: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notificationId);

        await this.prismaService.notifications.update({
            where: {
                id: raw.id,
            },
            data: raw,
        });
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prismaService.notifications.count({
            where: {
                recipientId,
            },
        });

        return count;
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notification = await this.prismaService.notifications.findMany({
            where: {
                recipientId,
            },
        });

        return notification.map(PrismaNotificationMapper.toDomain);
    
    }


}