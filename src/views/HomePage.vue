<template>
  <div class="flex justify-center">
    <div class="timeline-container">
      <div v-for="(event, index) in events" :key="index" class="timeline-item">
        <div class="timeline-content">
          <h3 class="text-xl font-bold">{{ event.title }}</h3>
          <p class="text-gray-600">{{ event.date }}</p>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: "Event 1",
          date: "January 2020",
          description: "Description of Event 1.",
        },
        {
          title: "Event 2",
          date: "February 2020",
          description: "Description of Event 2.",
        },
        // Add more events as needed
      ],
    };
  },
};
</script>

<style scoped>
.timeline-container {
  max-width: 800px; /* Adjust as needed */
}

.timeline-item {
  margin: 20px 0;
}

.timeline-content {
  padding: 20px;
  border-left: 2px solid #4a5568; /* Use Tailwind color or define your own */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .timeline-content {
    padding: 10px; /* Adjust padding for smaller screens */
  }
}
</style>
