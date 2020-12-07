#include "lists.h"
#include <stdio.h>
#include <stdlib.h>
/**
 *check_cycle - check if linked list has cycle
 *@list: pointer that pointed to type of linked list
 *Return: o if linked list has not a cycle or null otherwise return 1.
 */
int check_cycle(listint_t *list)
{
	listint_t *fast, *slow;

	if (list == NULL)
		return (0);
	fast = list->next;
	slow = list;
	while (fast != NULL && fast->next != NULL && slow != NULL)
	{
		if (fast == slow)
			return (1);
		fast = fast->next->next;
		slow = slow->next;
	}
	return (0);
}
