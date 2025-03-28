import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe('Count recipients notifications', () => {
    it('should be able to recipient notifications',async ()=>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);     

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipient-1'})
        ); 

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipient-1'})
        );

        await notificationsRepository.create(
            makeNotification({recipientId: 'recipient-2'})
        );
        
        const { count } =await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });
        
        expect(count).toEqual(2);
    
    });

});